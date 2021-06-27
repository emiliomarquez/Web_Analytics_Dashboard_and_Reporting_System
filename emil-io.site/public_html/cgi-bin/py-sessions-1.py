#!/usr/bin/env python3
import os
import sys
#from urllib import parse
from http import cookies
#import textwrap

# Reading Cookies with Python 
# (citation: https://www.usna.edu/Users/cs/adina/teaching/sy306/spring2017/slides/SY306_set10_Cookies.pdf)
# Ask browser to create cookie by printing “Set-cookie…” BEFORE
# printing “Content-type …”
# – Browser always sends appropriate cookies back to server with request
# – Read cookie
# • Access “HTTP_COOKIE” environment variable (from os import environ)
# • Use SimpleCookie class (from http import cookies)

found_cookie = 0
not_set = 0
new_cookie = 0
try:
    ogname = (sys.stdin.read().split('='))[1]
    # IF NO EXCEPTION
    # - ogname is in recent memory 
    # - meaning a cookie has not been set yet 
    # - and we must make a cookie
    new_cookie = 1
    fresh_cookie = cookies.SimpleCookie()
    fresh_cookie["username"] = ogname

    # case where user decides to leave input blank
    # to try to lower my grade 
    if len(fresh_cookie["username"].value) == 0:
        not_set = 1
        new_cookie = 0
    else:
        print(fresh_cookie.output())
except:
    # ogname is no longer in recent memory
    # so have to retrieve cookie and test if session still active
    old_cookie = cookies.SimpleCookie(os.environ["HTTP_COOKIE"])
    if len(old_cookie["username"].value) == 0:
        # no cookie was ever set if entered here 
        # OR
        # cookie was destroyed (made null)
        not_set = 1
    else:
        found_cookie = 1
        og_cookie = old_cookie["username"].value

print("Content-type: text/html\n")
print("<html>")
print("<head>")
print("<title>Session 1</title>")
print("<script src='./../collector.js'></script>")
print("<link href='./../styles/checkDisabledCss.css' rel='stylesheet'>")
print("</head>")
print("<body>")
print("<div id='cssCheck'></div>")
print("<img id='flag' src='./../images/clear.gif'' alt=''>")


print("<h1>Python Sessions Page 1</h1>")
print("<hr>")

if not_set == 1:
    print("<p><b>Name:</b> You do not have a name set</p>")
elif found_cookie == 1:
    print("<p><b>Name:</b> "+og_cookie+"</p>")
elif new_cookie == 1:
    print("<p><b>Name:</b> "+fresh_cookie["username"].value+"</p>")


print("<br />")
print("<a href=\"/cgi-bin/py-sessions-2.py\">Session Page 2</a>")
print("<br />")
print("<a href=\"/py-state-demo.html\">Python CGI Form</a>")
print("<br /><br />")
print("<form action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
print("<button type=\"submit\">Destroy Session</button>")
print("</form>")

print("</body>")
print("</html>")
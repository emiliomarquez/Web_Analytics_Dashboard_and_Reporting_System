#!/usr/bin/env python3
import os
import sys
#from urllib import parse
from http import cookies
#import textwrap

c = cookies.SimpleCookie(os.environ["HTTP_COOKIE"])
saved_cookie = c["username"].value

print("Cache-Control: no-cache")
print("Content-type: text/html\n")
print("<html>")
print("<head>")
print("<title>Session 2</title>")
print("<script src='./../collector.js'></script>")
print("<link href='./../styles/checkDisabledCss.css' rel='stylesheet'>")
print("</head>")
print("<body>")
print("<div id='cssCheck'></div>")
print("<img id='flag' src='./../images/clear.gif'' alt=''>")

print("<h1>Python Sessions Page 2</h1>")
print("<hr>")

if len(saved_cookie) == 0:
    print("<p><b>Name:</b> You do not have a name set</p>")
else:
    print("<p><b>Name:</b> "+saved_cookie+"</p>")


print("<br />")
print("<a href=\"/cgi-bin/py-sessions-1.py\">Session Page 1</a>")
print("<br />")
print("<a href=\"/py-state-demo.html\">Python CGI Form</a>")
print("<br /><br />")
print("<form action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
print("<button type=\"submit\">Destroy Session</button>")
print("</form>")

print("</body>")
print("</html>")
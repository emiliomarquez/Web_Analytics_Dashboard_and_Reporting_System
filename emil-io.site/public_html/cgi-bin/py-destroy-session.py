#!/usr/bin/env python3
import cgi, cgitb
import os
import sys
from urllib import parse
from http import cookies
import textwrap

remove = cookies.SimpleCookie(os.environ["HTTP_COOKIE"])
remove["username"] = ""
print(remove.output())

print("Content-type: text/html\n")
print("<html>")
print("<head>")
print("<title>Python Session Destroyed</title>")
print("<script src='./../collector.js'></script>")
print("<link href='./../styles/checkDisabledCss.css' rel='stylesheet'>")
print("</head>")
print("<body>")
print("<div id='cssCheck'></div>")
print("<img id='flag' src='./../images/clear.gif'' alt=''>")

print("<h1>Session Destroyed</h1>")
print("<hr>")

print("<a href=\"/py-state-demo.html\">Back to the Python CGI Form</a><br />")
print("<a href=\"/cgi-bin/py-sessions-1.py\">Back to Page 1</a><br />")
print("<a href=\"/cgi-bin/py-sessions-2.py\">Back to Page 2</a>")
print("</body>")
print("</html>")
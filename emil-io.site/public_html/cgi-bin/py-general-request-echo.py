#!/usr/bin/env python3

import os
import sys
from urllib import parse
print("Cache-Control: no-cache")
print("Content-type: text/html\n")
print("<html>")
print("<head>")
print("<title>General Request Echo</title>")
print("<script src='./../collector.js'></script>")
print("<link href='./../styles/checkDisabledCss.css' rel='stylesheet'>")
print("</head>")
print("<body>")
print("<div id='cssCheck'></div>")
print("<img id='flag' src='./../images/clear.gif'' alt=''>")

print("<h1 style='text-align:center;'>General Request Echo</h1>")
print("<hr>")

print("<p><b>HTTP Protocol:</b> " +  os.environ["SERVER_PROTOCOL" ] + "</p>")

print("<p><b>HTTP Method:</b> " + os.environ['REQUEST_METHOD'] + "</p>")


print("<p><b>Query String: </b></p>")
queries = dict(parse.parse_qsl(os.environ['QUERY_STRING']))
print("<ul>")
for key in queries:
    print("<li>"+key+" = "+queries[key]+"</li>")
print("</ul>")

msgbody = dict(parse.parse_qsl(sys.stdin.read()))
print("<p><b>Message body: </b></p>")
print("<ul>")
for key in msgbody:
    print("<li>"+key+" = "+msgbody[key]+"</li>")
print("</ul>")


print("</body>")
print("</html>")
#!/usr/bin/env python3
from urllib import parse
import os
print("Cache-Control: no-cache")
print("Content-type: text/html\n")
print("<html>")
print("<head>")
print("<title>GET Request Echo</title>")
print("<script src='./../collector.js'></script>")
print("<link href='./../styles/checkDisabledCss.css' rel='stylesheet'>")
print("</head>")
print("<body>")
print("<div id='cssCheck'></div>")
print("<img id='flag' src='./../images/clear.gif'' alt=''>")

print("<h1 style='text-align:center;'>GET Request Echo</h1>")
print("<hr>")

#print(parse.parse_qsl(os.environ['QUERY_STRING']))

queries = dict(parse.parse_qsl(os.environ['QUERY_STRING']))
#print(queries)

print("<p>Query String: "+os.environ['QUERY_STRING'])

print("<ul>")
for key in queries:
    print("<li>"+key+" = "+queries[key]+"</li>")
print("</ul>")

print("</body>")
print("</html>")
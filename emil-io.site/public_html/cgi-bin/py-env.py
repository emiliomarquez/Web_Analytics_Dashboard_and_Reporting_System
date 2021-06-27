#!/usr/bin/env python3

import os
print("Cache-Control: no-cache")
print("Content-type: text/html\n")
print("<html>")
print("<head>")
print("<title>Environment Variables</title>")
print("<script src='./../collector.js'></script>")
print("<link href='./../styles/checkDisabledCss.css' rel='stylesheet'>")
print("</head>")
print("<body>")
print("<div id='cssCheck'></div>")
print("<img id='flag' src='./../images/clear.gif'' alt=''>")


print("<h1 style='text-align:center;'>Environment Variables</h1>")
print("<hr>")

#print("<p style='font-size:x-large;margin-bottom:0;'>Environment Variables</p>")

#print(os.environ['QUERY_STRING'])

print("<p style='font-size:x-large;margin-bottom:0;'>Server Variables</p>")
print("<ul>")
for k, v in os.environ.items():
    print("<li style='padding:0.3em;'><b>"+f'{k}:</b> {v}'+"</li>")
print("</ul>")

print("</body>")
print("</html>")
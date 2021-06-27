#!/usr/bin/env python3


# note python auto newlines with each call to print
# so need one less newline added for headers

import datetime
import os
print("Cache-Control: no-cache")
print("Content-type: text/html\n")
print("<html>")
print("<head>")
print("<title>Hello, Team Mindparse!</title>")
print("<script src='./../collector.js'></script>")
print("<link href='./../styles/checkDisabledCss.css' rel='stylesheet'>")
print("</head>")
print("<body>")
print("<div id='cssCheck'></div>")
print("<img id='flag' src='./../images/clear.gif'' alt=''>")
print("<h1 style='text-align:center;'>Hello, Team Mindparse!</h1>")
print("<hr>")
print("<p>Hello Team Mindparse from Python</p>")
time = datetime.datetime.now()
print("<p>This program was generated at: "+ time.strftime("%A %b %d %H:%M:%S %Y")+"</p>")
print("<p>Your current IP address is: "+os.environ["REMOTE_ADDR"]+"</p>")

print("</body>")
print("</html>")
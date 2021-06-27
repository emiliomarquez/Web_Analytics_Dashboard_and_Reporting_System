#!/usr/bin/env python3

import datetime
import os
import json
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
time = datetime.datetime.now().strftime("%Y-%m-%d")
date = "Today's date is "+time
message = {
    "name": "Hello World from Python!",
    "date": date,
    "ipAddress": os.environ["REMOTE_ADDR"]
}


jmsg = json.dumps(message)

print(jmsg)

print("</body>")
print("</html>")
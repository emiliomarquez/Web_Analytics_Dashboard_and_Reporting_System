#!/usr/bin/perl

print "Cache-Control: no-cache\n";
print "Content-type: text/html\n\n";
print "<html>";
print "<head>";
print "<title>Hello, Team Mindparse!</title>";

print "<script src=\"./../collector.js\"></script>";
print "<link href=\"./../styles/checkDisabledCss.css\" rel=\"stylesheet\">";
print "</head>";
print "<body>";
print "<div id=\"cssCheck\"></div>";
print "<img id=\"flag\" src=\"./../images/clear.gif\" alt=\"\">";

print "<h1>Thomas was here - Hello, Team Mindparse!</h1>";
print "<p>This page was generated with the Perl programming langauge</p>";

$date = localtime();
print "<p>Current Time: $date</p>";

# IP Address is an environment variable when using CGI
$address = $ENV{REMOTE_ADDR};
print "<p>Your IP Address: $address</p>";

print "</body>";
print "</html>";
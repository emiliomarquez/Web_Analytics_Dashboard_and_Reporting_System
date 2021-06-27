<?php
    header('Cache-Control: no-cache');
    header('Content-Type: text/html');

    echo "<html>";
    echo "<head><title>Hello, Team Mindparse!</title>";

    echo "<script src=\"./../collector.js\"></script>";
    echo "<link href=\"./../styles/checkDisabledCss.css\" rel=\"stylesheet\">";
    
    echo "</head>";

    echo "<body>";
    echo "<div id=\"cssCheck\"></div>";
    echo "<img id=\"flag\" src=\"./../images/clear.gif\" alt=\"\">";
    echo "<h1> Hello Team Mindparse!</h1>";
    echo "<hr>";
    echo "<p>Hello Team Mindparse from PHP!</p>";
    echo "<p>This program was generated at: ". date("l M d ") . date("H:i:s Y") . "</p>";
    $ipaddress = getenv("REMOTE_ADDR") ;
    echo "Your current IP Address is " . $ipaddress;
    echo "</body>";

    echo "</html>";
?>

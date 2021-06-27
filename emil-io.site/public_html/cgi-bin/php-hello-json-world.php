<?php
    header('Cache-Control: no-cache');
    header('Content-Type: text/html'); 

    echo "<html>";
    echo "<head>";

    echo "<script src=\"./../collector.js\"></script>";
    echo "<link href=\"./../styles/checkDisabledCss.css\" rel=\"stylesheet\">";
    
    echo "</head>";

    echo "<body>";
    echo "<div id=\"cssCheck\"></div>";
    echo "<img id=\"flag\" src=\"./../images/clear.gif\" alt=\"\">";
    $vars->message = "Hello Team Mindparse from PHP!";
    $vars->date = "Today's date is " . date("Y-m-d");
    $vars->ipAddress = getenv("REMOTE_ADDR");
    $jsonOutput = json_encode($vars);
    echo $jsonOutput;
    echo "</body>";
    
    echo "</html>";

?>
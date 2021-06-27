<?php
    header('Cache-Control: no-cache');
    header('Content-Type: text/html'); 


    echo "<!DOCTYPE html>";
    echo "<html>";
    echo "<head><title>GET Request Echo</title>";

    echo "<script src=\"./../collector.js\"></script>";
    echo "<link href=\"./../styles/checkDisabledCss.css\" rel=\"stylesheet\">";
    
    echo "</head>";

    echo "<body>";
    
    echo "<div id=\"cssCheck\"></div>";
    echo "<img id=\"flag\" src=\"./../images/clear.gif\" alt=\"\">";
    echo "<h1 style='text-align:center;'>GET Request Echo</h1>";
    echo "<hr>";

    echo "<b>Query String:</b> " .  $_SERVER['QUERY_STRING'] . "<br />\n";

    $qstring = $_SERVER['QUERY_STRING'];

    parse_str($qstring, $output);
    //echo $output;
    // echo "<p>" . $output[0][1] . "</p>";

    echo "<ul>";
    foreach($output as $key => $value) {
        echo "<li style='padding:0.5em;'><b>". $key . ": </b>" . $value . "</li>";
    }
    echo "</ul>";
    //print_r($output);

    echo "</body>";

    echo "</html>";

?>
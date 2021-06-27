<?php
    header('Cache-Control: no-cache');
    header('Content-Type: text/html'); 

    echo "<!DOCTYPE html>";
    echo "<html>";
    echo "<head><title>General Request Echo</title>";
    echo "<script src=\"./../collector.js\"></script>";
    echo "<link href=\"./../styles/checkDisabledCss.css\" rel=\"stylesheet\">";
    echo "</head>";

    echo "<body>";
    echo "<div id=\"cssCheck\"></div>";
    echo "<img id=\"flag\" src=\"./../images/clear.gif\" alt=\"\">";
    echo "<h1 style='text-align:center;'>General Request Echo</h1>";
    echo "<hr>";

    echo "<p><b>HTTP Protocol:</b> " .  $_SERVER[ "SERVER_PROTOCOL" ] . "</p>";
    
    echo "<p><b>HTTP Method:</b> " . $_SERVER['REQUEST_METHOD'] . "</p>";
    
    echo "<p><b>Query: </b></p>";
    $qstring = $_SERVER['QUERY_STRING'];
    parse_str($qstring, $output);
    echo "<ul>";
        foreach($output as $key => $value) {
            echo "<li style='padding:0.5em;'><b>". $key . ": </b>" . $value . "</li>";
        }
    echo "</ul>";

    echo "<p><b>Message Body:</b></p>";
    echo "<ul>";
        foreach($_POST as $key => $value) {
            echo "<li style='padding:0.5em;'><b>". $key . ": </b>" . $value . "</li>";
        }
    echo "</ul>";


    echo "</body>";
    echo "</html>";
?>
    
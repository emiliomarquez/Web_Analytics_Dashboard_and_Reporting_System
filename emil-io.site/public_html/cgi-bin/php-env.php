<?php
    header('Cache-Control: no-cache');
    header('Content-Type: text/html'); 

    echo "<!DOCTYPE html>";
    echo "<html>";
    echo "<head>";
    echo "<title>PHP Environment Variables</title>";
    echo "<script src=\"./../collector.js\"></script>";
    echo "<link href=\"./../styles/checkDisabledCss.css\" rel=\"stylesheet\">";
    echo "</head>";

    echo "<body>";
    echo "<div id=\"cssCheck\"></div>";
    echo "<img id=\"flag\" src=\"./../images/clear.gif\" alt=\"\">";

    echo "<h1 style='text-align: center;'>PHP Environment Variables</h1>";
    echo "<hr>";

    echo "<ul>";
    echo "<h2 style='font-size:x-large; margin-bottom: 0.2em;'>Environment Variables</h2>";
    foreach($_ENV as $key => $value) {
        echo "<li style='padding:0.5em;'><b>". $key . ": </b>" . $value . "</li>";
    }
    echo "</ul>";

    echo "<ul>";
    echo "<h3 style='font-size:x-large; margin-bottom: 0.2em;'>Server Variables</h3>";
    foreach($_SERVER as $key => $value) {
        echo "<li style='padding:0.5em;'><b>". $key . ": </b>" . $value . "</li>";
    }
    echo "</ul>";


    echo "</body>";
    echo "</html";

?>
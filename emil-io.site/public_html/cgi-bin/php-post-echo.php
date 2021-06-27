<?php
    header('Cache-Control: no-cache');
    header('Content-Type: text/html'); 


    echo "<!DOCTYPE html>";
    echo "<html>";
    echo "<head><title>POST Request Echo</title>";

    echo "<script src=\"./../collector.js\"></script>";
    echo "<link href=\"./../styles/checkDisabledCss.css\" rel=\"stylesheet\">";
    
    echo "</head>";

    echo "<body>";

    echo "<div id=\"cssCheck\"></div>";
    echo "<img id=\"flag\" src=\"./../images/clear.gif\" alt=\"\">";
    echo "<h1 style='text-align:center;'>POST Request Echo</h1>";
    echo "<hr>";

    //var_dump($_POST);

    echo "<ul>";
    print "<h2>Message Body:</h2>";
    foreach($_POST as $key => $value) {
        echo "<li style='padding:0.5em;'><b>". $key . ": </b>" . $value . "</li>";
    }
    echo "</ul>";


    echo "</body>";
    echo "</html>";
?>
    
<?php
    // Start the session
    session_start();
?>

<?php
    header('Cache-Control: no-cache');
    header('Content-Type: text/html'); 

    echo "<!DOCTYPE html>";
    echo "<html>";
    echo "<head><title>PHP Session Destroyed</title>";
    echo "<script src=\"./../collector.js\"></script>";
    echo "<link href=\"./../styles/checkDisabledCss.css\" rel=\"stylesheet\">";
    echo "</head>";

    echo "<body>";
    echo "<div id=\"cssCheck\"></div>";
    echo "<img id=\"flag\" src=\"./../images/clear.gif\" alt=\"\">";
    echo "<h1>Session Destroyed</h1>";

    // remove all session variables
    session_unset();

    // destroy the session
    session_destroy();

    echo "<a href=\"/php-state-demo.html\">Back to the PHP CGI Form</a><br />";
    echo "<a href=\"/cgi-bin/php-sessions-1.php\">Back to Page 1</a><br />";
    echo "<a href=\"/cgi-bin/php-sessions-2.php\">Back to Page 2</a>";

    echo "</body>";
    echo "</html>";
?>
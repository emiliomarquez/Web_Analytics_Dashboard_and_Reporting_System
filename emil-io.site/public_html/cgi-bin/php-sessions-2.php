<?php
    // Start the session
    session_start();
?>

<?php
    header('Cache-Control: no-cache');
    header('Content-Type: text/html'); 

    echo "<!DOCTYPE html>";
    echo "<html>";
    echo "<head><title>Session 2</title>";
    echo "<script src=\"./../collector.js\"></script>";
    echo "<link href=\"./../styles/checkDisabledCss.css\" rel=\"stylesheet\">";

    
    echo "</head>";

    echo "<body>";
    echo "<div id=\"cssCheck\"></div>";
    echo "<img id=\"flag\" src=\"./../images/clear.gif\" alt=\"\">";
    echo "<h1>PHP Sessions Page 2</h1>";
    echo "<hr>";

    //echo $_POST['username'];
    //echo $_SESSION['username'];
    //echo $_REQUEST['username'];

    $name = $_POST['username'];
    $seshname = $_SESSION['username'];

    if($seshname != NULL){
        echo "<p><b>Name:</b> " . $seshname . "</p>";
    }else{
        echo "<p><b>Name:</b> You do not have a name set</p>";
    }


    echo "<br />";
    echo "<a href=\"/cgi-bin/php-sessions-1.php\">Session Page 1</a>";
    echo "<br />";
    echo "<a href=\"/php-state-demo.html\">PHP CGI Form</a>";
    echo "<br /><br />";
    echo "<form action=\"/cgi-bin/php-destroy-session.php\" method=\"get\">";
    echo "<button type=\"submit\">Destroy Session</button>";
    echo "</form>";


    echo "</body>";
    echo "</html>";
?>
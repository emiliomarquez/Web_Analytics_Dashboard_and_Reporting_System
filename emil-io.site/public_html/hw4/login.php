

<?php
    // utilizing session for redirect when 
    // user logins with incorrect info, the following resources helped:
    // https://stackoverflow.com/questions/22129273/display-error-message-on-same-page-for-login

     // Start the session
    session_start();
?>

<?php
    if($_SESSION['loggedIn']){
        header("Location: http://emil-io.site/hw4/index.php");
        die();
    }
    // login.php
    //header('Content-Type: text/html');
    echo "<!DOCTYPE html>";
    echo "<html>";

    echo "<head>";
        echo "<meta charset=\"UTF-8\" />";
        echo "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />";
        echo "<title>Analytics App Login</title>";
        echo "<link rel=\"icon\" href=\"./../images/favicon.ico\">";
        echo "<link href=\"./../styles/login.css\" rel=\"stylesheet\">";
    echo "</head>";

    echo "<body>";
        echo "<h1 align=\"center\">Analytics Login</h1>";

        echo "<div id=\"errMsg\">";
        if(!empty($_SESSION['errMsg'])) {
            echo $_SESSION['errMsg'];
        }
        echo "</div>";
        unset($_SESSION['errMsg']);

        echo "<section class=\"login-box\">";
        echo "<form action=\"./login-redirect.php\" method=\"POST\" id=\"login-form\">";
        echo "<label class=\"user-input\">Username (or email address):<input type=\"text\" name=\"username\" name=\"email\" autocomplete=\"off\"></label>";
        echo "<br>";
        echo "<label class=\"pass-input\">Password<input type=\"text\" name=\"password\" autocomplete=\"off\"></label>";
        echo "<br>";
        echo "<input type=\"submit\" name=\"submit\" value=\"Login\">";
        echo "</form>";
        echo "</section>";
    echo "</body>";
    
    echo "</html>";
?>
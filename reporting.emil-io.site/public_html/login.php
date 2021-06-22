

<?php
    // utilizing session for redirect when 
    // user logins with incorrect info, the following resources helped:
    // https://stackoverflow.com/questions/22129273/display-error-message-on-same-page-for-login

     // Start the session
    session_start();
?>

<?php
    if($_SESSION['loggedIn']){
        header("Location: http://reporting.emil-io.site/index.php");
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
        echo "<link rel=\"icon\" href=\"./images/favicon.ico\">";
        echo "<link rel=\"stylesheet\" href=\"./styles/login.css\" >";

    echo "</head>";

    echo "<body>";
        echo "<h1 class=\"login-heading\">Analytics Login</h1>";
        echo "<br>";
        echo "<br>";
        echo "<div class=\"error-message\">";
        if(!empty($_SESSION['errMsg'])) {
            echo $_SESSION['errMsg'];
        }
        echo "</div>";
        unset($_SESSION['errMsg']);

        echo "<section class=\"login-box\">";
        echo "<form action=\"./login-redirect.php\" method=\"POST\" id=\"login-form\">";
        //echo "<label class=\"user-input\">Username (or email address)<br><input class=\"user-field\"type=\"text\" name=\"username\" name=\"email\" autocomplete=\"off\" placeholder=\"username or email address\" ></label>";
        echo "<input class=\"user-field\"type=\"text\" name=\"username\" name=\"email\" autocomplete=\"off\" placeholder=\"Username or Email Address\">";
        echo "<br>";
        echo "<br>";
        //echo "<label class=\"pass-input\">Password<br><input class=\"pass-field\" type=\"text\" name=\"password\" autocomplete=\"off\" placeholder=\"password\"></label>";
        echo "<input class=\"pass-field\" type=\"password\" name=\"password\" autocomplete=\"off\" placeholder=\"Password\">";
        echo "<br>";
        echo "<br>";
        echo "<input class=\"login-button\" type=\"submit\" name=\"submit\" value=\"Login\">";
        echo "</form>";
        echo "</section>";

        echo "<footer>";
        echo    "<p> © 2021. Coded by Emilio Marquez-Fernandez.</p>";
        echo "</footer>";
    echo "</body>";
    
    echo "</html>";
?>
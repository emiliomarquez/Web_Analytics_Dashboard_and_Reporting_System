<?php
    // logout.php
    session_start();
    echo "<!DOCTYPE html>";
    echo "<html>";

    echo "<head>";
        echo "<meta charset=\"UTF-8\" />";
        echo "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />";
        echo "<title>Analytics App Logout</title>";
        echo "<link rel=\"icon\" href=\"./images/favicon.ico\">";
        echo "<link href=\"./styles/login.css\" rel=\"stylesheet\">";
    echo "</head>";

    echo "<body>";

    if($_SESSION['loggedIn']){

        unset($_SESSION['loggedIn']);
        echo "<h1 class=\"logout-message\">You have successfully been logged out</h1>";
        echo "<a class=\"logout-redirect\"href=\"./login.php\">Click here to go back to Login page</a>";
    }else{
        $_SESSION['errMsg'] = "Cannot access user logout page without logging in first!";
        header("Location: http://reporting.emil-io.site/login.php");
        die();
    }


    echo "</body>";

    echo "</html>";

?>
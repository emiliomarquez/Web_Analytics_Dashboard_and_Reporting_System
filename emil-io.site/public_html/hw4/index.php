
<?php
    // the following resources helped me identify how to detect if a user is logged in:
    // https://stackoverflow.com/questions/30433253/how-to-prevent-a-user-from-directly-accessing-my-html-page-by-writing-url/30433319
    session_start();
    // index.php
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
    if($_SESSION['loggedIn']){
        // allow onto page
        if($_SESSION['access'] == 'admin'){
            // this is admin user
            echo "<h1>You are admin user</h1>";
            echo "<a href=\"./users/index.php\">User Management</a>";
            echo "<br>";

            echo "<a href=\"./logout.php\">Logout</a>";

        }else{
            // this is basic user
            echo "<h1>You are basic user</h1>";
            echo "<a href=\"./logout.php\">Logout</a>";

        }
    }else{
        $_SESSION['errMsg'] = "Cannot access user pages without logging in first!";
        header("Location: http://emil-io.site/hw4/login.php");
        die();
    }

    echo "</body>";

    echo "</html>";
?>
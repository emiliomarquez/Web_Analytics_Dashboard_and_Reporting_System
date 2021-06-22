
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
        echo "<link rel=\"icon\" href=\"./images/favicon.ico\">";
        echo "<link href=\"./styles/login.css\" rel=\"stylesheet\">";
    echo "</head>";

    echo "<body>";
    if($_SESSION['loggedIn']){
        // allow onto page
        if($_SESSION['access'] == 'admin'){
            // this is admin user
            echo "<h1>Admin Dashboard</h1>";
            echo "<a href=\"./users/index.php\">User Management</a>";
            echo "<br>";
            echo "<br>";
            echo "<a href=\"./mouseButtonClickReport.php\">Report</a>";


            echo "<br>";
            echo "<br>";

            echo "<a href=\"./logout.php\">Logout</a>";

            echo "<br>";
            echo "<br>";
            
            echo "<p align=\"center\"><iframe style=\"background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);\" width=\"640\" height=\"480\" src=\"https://charts.mongodb.com/charts-cse135hw3-kyvti/embed/charts?id=3a91d81a-ded6-4842-b5f9-ba99306993e4&autoRefresh=300&theme=dark\"></iframe></p>";
            echo "<br>";
            echo "<br>";
            
            echo "<p align=\"center\"><iframe style=\"background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);\" width=\"640\" height=\"480\" src=\"https://charts.mongodb.com/charts-cse135hw3-kyvti/embed/charts?id=d036ed00-af17-4607-bf7d-d7128918d07a&autoRefresh=300&theme=dark\"></iframe></p>";
            echo "<br>";
            echo "<br>";
            echo "<p align=\"center\"><iframe style=\"background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);\" width=\"640\" height=\"480\" src=\"https://charts.mongodb.com/charts-cse135hw3-kyvti/embed/charts?id=43298569-8677-4531-8cd4-c8b8bd6b00db&autoRefresh=300&theme=dark\"></iframe></p>";
            echo "<br>";
            echo "<br>";
            echo "<p align=\"center\"><iframe style=\"background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);\" width=\"640\" height=\"480\" src=\"https://charts.mongodb.com/charts-cse135hw3-kyvti/embed/charts?id=e7419250-5bb0-418f-8efd-50dec19aa821&autoRefresh=300&theme=dark\"></iframe></p>";


        }else{
            // this is basic user
            echo "<h1>Basic Dashboard</h1>";
            echo "<a href=\"./mouseButtonClickReport.php\">Report</a>";
            echo "<br>";
            echo "<br>";
            echo "<a href=\"./logout.php\">Logout</a>";
            echo "<br>";
            echo "<br>";

             echo "<p align=\"center\"><iframe style=\"background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);\" width=\"640\" height=\"480\" src=\"https://charts.mongodb.com/charts-cse135hw3-kyvti/embed/charts?id=3a91d81a-ded6-4842-b5f9-ba99306993e4&autoRefresh=300&theme=dark\"></iframe></p>";
            echo "<br>";
            echo "<br>";
            
            echo "<p align=\"center\"><iframe style=\"background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);\" width=\"640\" height=\"480\" src=\"https://charts.mongodb.com/charts-cse135hw3-kyvti/embed/charts?id=d036ed00-af17-4607-bf7d-d7128918d07a&autoRefresh=300&theme=dark\"></iframe></p>";
            echo "<br>";
            echo "<br>";
            echo "<p align=\"center\"><iframe style=\"background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);\" width=\"640\" height=\"480\" src=\"https://charts.mongodb.com/charts-cse135hw3-kyvti/embed/charts?id=43298569-8677-4531-8cd4-c8b8bd6b00db&autoRefresh=300&theme=dark\"></iframe></p>";
            echo "<br>";
            echo "<br>";
            echo "<p align=\"center\"><iframe style=\"background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);\" width=\"640\" height=\"480\" src=\"https://charts.mongodb.com/charts-cse135hw3-kyvti/embed/charts?id=e7419250-5bb0-418f-8efd-50dec19aa821&autoRefresh=300&theme=dark\"></iframe></p>";

        }
    }else{
        $_SESSION['errMsg'] = "Cannot access user pages without logging in first!";
        header("Location: http://reporting.emil-io.site/login.php");
        die();
    }

    echo "</body>";

    echo "</html>";
?>
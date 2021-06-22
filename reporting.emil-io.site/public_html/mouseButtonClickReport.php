<?php
    // index.php for admin CRUD
    session_start();

    echo "<!DOCTYPE html>";
    echo "<html>";

    echo "<head>";
        echo "<meta charset=\"UTF-8\" />";
        echo "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />";
        echo "<title>Analytics App Report</title>";
        echo "<link rel=\"icon\" type=\"image/ico\" href=\"./../images/favicon.ico\">";
        echo "<link href=\"./../styles/login.css\" rel=\"stylesheet\">";
       
    echo "</head>";

    echo "<body>";
    if($_SESSION['loggedIn']){
        
            echo "<h1>Mouse Button Click Report</h1>";
            echo "<a href=\"./../index.php\">Home</a>";
            echo "<br>";
            echo "<br>";

            echo "<a href=\"./../logout.php\">Logout</a>";
            echo "<br>";
            echo "<br>";
            
            echo "<p align=\"center\"><iframe style=\"background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);\" width=\"640\" height=\"480\" src=\"https://charts.mongodb.com/charts-cse135hw3-kyvti/embed/charts?id=c3533200-1217-4e64-be01-695d69e6b1fc&autoRefresh=300&theme=dark\"></iframe></p>";
            echo "<br>";
            echo "<br>";
            
            echo "<p align=\"center\"><iframe style=\"background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);\" width=\"640\" height=\"480\" src=\"https://charts.mongodb.com/charts-cse135hw3-kyvti/embed/charts?id=b5103d03-1b25-432f-9b32-0a62b9353461&autoRefresh=300&theme=dark\"></iframe></p>";
            echo "<br>";
            echo "<br>";

            echo "<h2 class=\"report-h2\">Signifance of Mouse Button Clicks on Site Pages";
            echo "<p class=\"report-p\">";
            echo "The first data visualizations showcases pages where site visitors are interacting the most on the site.<br>
            The second data visualization goes into more detail regarding the specific location of the user interaction<br>
            occuring on the top 5 site pages. 
            You can use these data visualization to pinpoint which parts of a specific page on the site may<br>
            need design changes in order to drive an increase in user interaction to those parts of a specific page.<br>
            ";
            echo "</p>";


    }else{
        $_SESSION['errMsg'] = "Cannot access report page without logging in first!";
        header("Location: http://reporting.emil-io.site/login.php");
        die();
    }


?>
<?php
    // index.php for admin CRUD
    session_start();

    echo "<!DOCTYPE html>";
    echo "<html>";

    echo "<head>";
        echo "<meta charset=\"UTF-8\" />";
        echo "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />";
        echo "<title>Analytics App CRUD</title>";
        echo "<link rel=\"icon\" type=\"image/ico\" href=\"./../images/favicon.ico\">";
        echo "<link href=\"./../styles/login.css\" rel=\"stylesheet\">";
        echo "<script src=\"https://cdn.zinggrid.com/dev/zinggrid-dev.min.js\" defer></script>";

        echo "<script>";
            echo "function _addID(record) {";
            echo "console.log(record);";
            echo "return record;";
            echo "}";
        echo "</script>";
    echo "</head>";

    echo "<body>";
    if($_SESSION['loggedIn']){
        // allow onto page
        if($_SESSION['access'] == "admin"){
            // this is admin user
            echo "<h1>Admin User CRUD</h1>";
            echo "<a href=\"./../index.php\">Home</a>";
            echo "<br>";
            echo "<br>";

            echo "<a href=\"./../logout.php\">Logout</a>";
            echo "<br>";
            echo "<br>";

            // $users = file_get_contents("https://emil-io.site/api/users/");
            // echo "<br>";
            // echo $users;
            // echo "<br>";
            // echo "<br>";

            // “convert json string to array php” Code Answer’s
            // https://www.codegrepper.com/code-examples/php/convert+json+string+to+array+php
            // $userArray = json_decode($users, true);
            // echo "<br>";

            // print_r($userArray);
            // echo "<br>";
            // echo "<br>";

            // $userArray2 = $userArray["data"];
            
            // code below removes the following keys
            // from the array so that they will not be included
            // and they also cannot be modified by admin
            /*
            foreach ($userArray2 as $key => $value) {
                unset($userArray2[$key]['_id']);
                unset($userArray2[$key]['created']);
                unset($userArray2[$key]['__v']);
            }
            
            unset($userArray2[0]['_id']);
            unset($userArray2['created']);
            unset($userArray2['__v']);
            


            print_r($userArray2);
            echo "<br>";
            echo "<br>";




            echo $userArray["data"][0];

            echo "<br>";
            echo "<br>";
            echo ($userArray["data"][4])["access"];

            if(  (($userArray["data"][4])["access"] ) == 'basic' ){
                echo "gotem";
            }else{
                echo " no fam ";
            }

            echo "<br>";

            echo "<br>";
            */

            // https://www.zinggrid.com/docs/getting-started/data-basics
            
            //  echo "<zing-grid caption=\"CRUD Grid\" sort search layout=\"row\" viewport-stop editor-controls>";
            //  echo "<zg-data src=\"https://emil-io.site/api/users/\">";
            //  echo "<zg-param name=\"createOptions\" value='{\"method\": \"POST\",\"body\": \"_addID\" , \"src\": \"https://emil-io.site/api/users/auth/register\"}'></zg-param>"; 
            //  echo "</zg-data>";        
            //  echo "</zing-grid>";
            

            // https://www.zinggrid.com/docs/api/tags/zg-data
            echo "<zing-grid caption=\"CRUD User Grid\" sort search layout=\"row\" viewport-stop editor-controls>";
            
            echo "<zg-colgroup>";
            echo "<zg-column index=\"username\" header=\"Username\"></zg-column>";
            echo "<zg-column index=\"email\"  header=\"Email\"></zg-column>";
            echo "<zg-column index=\"hash_password\"  header=\"Hash Password\"></zg-column>";
            echo "<zg-column index=\"access\" header=\"Access Level\"></zg-column>";
            echo "</zg-colgroup>";
            
            echo "<zg-data>";
            echo "<zg-param name=\"src\" value=\"https://emil-io.site/api/users/\"></zg-param>";
            echo "<zg-param name=\"recordPath\" value=\"data\"></zg-param>";
            echo "<zg-param name=\"createOptions\" value='{\"method\": \"POST\", \"body\": \"_createID\" }'></zg-param>";
            echo "<zg-param name=\"updateOptions\" value='{\"row\":{\"method\": \"PUT\", \"body\": \"buildUpdate\", \"src\": \"https://emil-io.site/api/users/\"}}'></zg-param>";
            echo "<zg-param name=\"updateOptions\" value='{\"cell\":{\"method\": \"PUT\", \"body\": \"buildUpdate\", \"src\": \"https://emil-io.site/api/users/\"}}'></zg-param>";
            echo "<zg-param name=\"deleteOptions\" value='{\"body\": \"_deleteID\" }'></zg-param>";

            echo "</zg-data>";
            echo "</zing-grid>";

           
            echo "<script>";
            echo "function _createID(record) {";
                echo "console.log('we in addid fam');";
                echo "console.log(record.hash_password);";
                echo "console.log(record.title);";
                echo "console.log(record.state);";

                echo "return {username: record.username, email: record.email, password: record.hash_password, access: record.access,};";
                echo "}";

            echo "function buildUpdate(record) {";
                echo "console.log('we about to update fam');";
                echo "console.log(record);";
                echo "return { access: record.access, _id:record._id ,username: record.username, email: record.email, password: record.hash_password,};";
                echo "}";

            echo "function _deleteID(record) {";
                echo "console.log('we about to delete fam');";
                echo "console.log(record.username);";

                echo "return {username: record.username,};";
                echo "}"; 

            /*
            echo "window.addEventListener('load', () => { ";
            echo "const zgRef = document.querySelector('zing-grid');";
            $finalUserArray = json_encode($userArray2);

            echo "var data = $finalUserArray;";
            
            echo "zgRef.setData(data);";
            echo "});";
            */
            echo "</script>";

            




            // https://stackoverflow.com/questions/26780322/php-array-image-url-text-to-src
            /*
            echo "<zing-grid caption=\"CRUD User Grid\" columns-control draggable layout-controls pager page-size=\"4\" page-size-options=\"2,4,8\" search sort src=\"https://emil-io.site/api/users/\"></zing-grid>";

            echo "<zg-colgroup>";                    
            echo "<zg-column index=\"username\" width=\"300\"></zg-column>";
            echo "<zg-column index=\"email\" width=\"300\"></zg-column>";
            echo "<zg-column index=\"hash_password\" width=\"300\"></zg-column>";
            echo "</zg-colgroup>";
            echo "</zing-grid>";
            */
            
            //echo "<zing-grid src=\"{$userArray2}\" editor editor-controls></zing-grid>";
            //echo '<zing-grid src="'.$userArray["data"].'" editor editor-controls></zing-grid>';
            





            /*
            $opts = array(
                'http'=>array(
                  'method'=>"GET"
                )
              );
              
              $context = stream_context_create($opts);
              
              // Open the file using the HTTP headers set above
              $users = file_get_contents('https://emil-io.site/api/users/', false, $context);
              echo $users;

             echo "past get request";
             */

            echo "</body>";

            echo "</html>";

        }else{
            // this is basic user so cannot access user CRUD
            header("Location: http://reporting.emil-io.site/login.php");
            die();

        }
    }else{
        $_SESSION['errMsg'] = "Cannot access user pages without logging in first!";
        header("Location: http://reporting.emil-io.site/login.php");
        die();
    }




?>
<?php
// login-redirect.php

// resources used:
// CURLless method for post request:
// https://stackoverflow.com/questions/5647461/how-do-i-send-a-post-request-with-php
// retrieving form data with php:
// https://www.ostraining.com/blog/coding/retrieve-html-form-data-with-php/

session_start();
if ( isset( $_POST['submit'] ) ) {

    $username = $_REQUEST['username'];
    $pass = $_REQUEST['password'];
    /*
    echo 'we made it fam';
    echo 'Your name is ' . strval($username) .'   pass is  ' . strval($pass);
    */

    $url = 'https://emil-io.site/api/users/auth/sign_in';
    $data= array('username' => $username, 'password' => $pass);
    /*
    echo '<br>';
    echo $data['username'];
    echo '<br>';
    echo $data['password'];
    echo '<br>';
    echo gettype($data['username']);
    echo '<br>';
    echo gettype($data['password']);
    echo '<br>';
    */




    // use key 'http' even if you send the request to https://...
    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    //echo gettype($result);
    //echo '<br>';

    //echo "printing token below";
    //echo '<br>';

    // code below returns first char of JWT token
    // echo substr($result,16);
    //echo $result;
    //echo '<br>';
    //echo '<br>';
    //echo substr($result,0,16);

    $strlen = strlen( $result );
    //$start = substr($result,16);
    for( $i = 16; $i <= $strlen-4; $i++ ) {
        $char .= substr( $result, $i, 1 );
        //echo $char;
        // $char contains the current character, so do your processing here
    }
    //echo $char;

    // if result is wrong password or user
    if ($result === FALSE) { 
        $_SESSION['errMsg'] = "Invalid username or password";
        $_SESSION['loggedIn'] = false;

        

        
        // remove comments below
        header("Location: http://reporting.emil-io.site/login.php");
        die();
    }else{
        $_SESSION['loggedIn'] = true;
        //echo '<br>';

        //echo "about to print user data";
        //echo '<br>';

        //echo "Authentication: JWT " . $char;
        //echo '<br>';

        $url2 = 'https://emil-io.site/api/users/tasks';
        
        $options2 = array(
            'http' => array(
                'method'  => 'POST',
                'header' => array(
                    "authorization: JWT " . $char,
                    "Content-type: application/x-www-form-urlencoded",
                ),
                'content' => http_build_query($data)
            )
        );
        $context2  = stream_context_create($options2);
        $result2 = file_get_contents($url2, false, $context2); 
        //echo '<br>';

        //echo $result2;
        //echo '<br>';

        // if result2 contains false anywhere in its string
        // then cond true
        // *************IMPORTANT NOTE:****************
        // if more roles needed in future, will
        // have to change line below such that: I have to
        // make access for userModel.js a string variable 
        // where it has two strings: “basic” and “admin” (or more depending on role)
        // and inside login-redirect.php you can just change strpos to find “basic”
        //  or “admin” or other roles in $result2 string 
        if(strpos($result2, 'basic') !== false){
            //echo 'you got basic access fam';
            $_SESSION['access'] = "basic";
            header("Location: http://reporting.emil-io.site/index.php");
            die();


            // redirect to basic access page

        }else{
            //echo 'nice your an admin';
            // redirect to admin access page
            $_SESSION['access'] = "admin";

            header("Location: http://reporting.emil-io.site/index.php");
            die();
        }
        //echo '<br>';



        // make this redirect to login site for admin and basic users
        // need to add extra condition to differentiate between the two
        // remove comments below
        //header("Location: http://emil-io.site");
        //die();
    }
    //var_dump($result);

    // if(strpos($result, 'token') !== false){
    //     echo 'true fam';
    // }else{
    //     echo 'false';
    // }

}else{
    //echo 'not yet m8';
    //$_SESSION['errMsg'] = "Invalid username or password";
        $_SESSION['loggedIn'] = false;

        header("Location: http://reporting.emil-io.site/login.php");
        die();
}

?>


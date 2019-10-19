<?php
// Checks if form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    function post_captcha($user_response) {
        $fields_string = '';
        $fields = array(
            'secret' => '6LdDZ7kUAAAAAHUW3wtWuSb0CiVoP5SrN47zx9SA',
            'response' => $user_response
        );
        foreach($fields as $key=>$value)
        $fields_string .= $key . '=' . $value . '&';
        $fields_string = rtrim($fields_string, '&');

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
        curl_setopt($ch, CURLOPT_POST, count($fields));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, True);

        $result = curl_exec($ch);
        curl_close($ch);

        return json_decode($result, true);
    }

    // Call the function post_captcha
    $res = post_captcha($_POST['g-recaptcha-response']);

    if (!$res['success']) {
        // What happens when the CAPTCHA wasn't checked
        echo '<p>Please go back and make sure you check the security CAPTCHA box.</p><br>';
    } else {

        if (isset($_POST['submit'])){
            $name = $_POST['name'];
            $subject = $_POST['subject'];
            $mailFrom = $_POST['email'];
            $message = $_POST['message'];
        
        
            $mailTo = 'info@lcbapartments.com';
            $headers = "From: ".$mailFrom;
            $txt = "You have received an e-mail from ".$name. ".\n\n".$message;
        
        
            mail($mailTo, $subject, $txt, $headers);
            header("Location: index.html");
        
        }
    }
}
    
?>
    


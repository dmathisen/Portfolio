<?php
	header('Content-Type: application/json');

	function spamCheck($field)
	{
		$field = filter_var($field, FILTER_SANITIZE_EMAIL);
		if(filter_var($field, FILTER_VALIDATE_EMAIL))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	function sendMail($toEmail, $fromEmail, $subject, $message, $headers)
	{
		$validFromEmail = spamCheck($fromEmail);
		if($validFromEmail)
		{
			mail($toEmail, $subject, $message, $headers);
			echo "success";
		} else {
			echo "Send failed. Something went wrong :(";
		}
		exit;
	}

	$name = isset($_POST['name']) ? $_POST['name'] : false;
	$email = isset($_POST['email']) ? $_POST['email'] : false;
	$message = isset($_POST['message']) ? $_POST['message'] : false;

	if ($name == false || $email == false || $message == false) {
		echo "Name, email and message are required";
		exit;
	} else {
		$to = "dan@danmathisen.com";
		$subject = "Message from danmathisen.com";
		$msg = "From: $name ($email)\n\n$message";

		$headers  = "Reply-To: $name <$email>\r\n";
		$headers .= "Return-Path: $name <$email>\r\n";
		$headers .= "From: $name <$email>\r\n";
		$headers .= "X-Mailer: PHP/" . phpversion();

		sendMail($to, $email, $subject, $msg, $headers);
	}

?>
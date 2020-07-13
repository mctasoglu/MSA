<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$msg=$_POST['msg'];

		$to='mctasoglu@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Form Submission';
		$subject2 = "Copy of your form submission";
		$message="Name :".$name."\n"."\n"."Wrote the following :"."\n\n".$msg;
		$message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

		$headers="From: ".$email;
		$headers2 = "From:" . $to;

		mail($to, $subject, $message, $headers);
		mail($from,$subject2,$message2,$headers2);

		echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
		

	
		
	}
?>
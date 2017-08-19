<?php
if(isset($_POST['submit']))
{
	$nome = trim(strip_tags($_POST['form1-3-name']));
	$email = trim(strip_tags($_POST['form1-3-email']));
	$messaggio = trim(strip_tags($_POST['form1-3-message']));
	$telefono = trim(strip_tags($_POST['form1-3-phone']));
	
	$header = "From: $email\n" . "Reply-To: $email\n" . "Cell: $telefono\n";
	$subject = "Richiesta dal Sito-Web";
	$email_to = "teo97.alesiani@gmail.com ";

	if(mail($email_to, $subject, $messaggio, $header)) {
		echo "Mail inviata con successo";
	}
	else {
		echo "Problemi nell'invio della mail";
	}
}
?>
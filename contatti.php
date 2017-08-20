<HTML>
	<HEAD> </HEAD>
	<BODY>
		<?php
		if(isset($_POST['submit']))
		{
			$nome = trim(strip_tags($_POST['name']));
			$email = trim(strip_tags($_POST['email']));
			$messaggio = trim(strip_tags($_POST['message']));
			$telefono = trim(strip_tags($_POST['phone']));
			
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
	</BODY>
</HTML>
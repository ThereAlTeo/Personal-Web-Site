<?php
if(isset($_POST['submit']))
{
	$subject = "Richiesta dal Sito-Web";
	$email_to = "teo97.alesiani@gmail.com ";

		echo "Mail inviata con successo";
	}
	else {
		echo "Problemi nell'invio della mail";
	}
}
?>

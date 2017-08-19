$(function(){
 
	$("#contatti").validate({
	rules:{
		'form1-3-name':{
		required: true,
		minlength: 3
		},

		'form1-3-email':{
		required: true,
		email: true
		},
		
		'form1-3-message':{
		required: true,
		minlength: 5
		}
	},
	messages:{
		'form1-3-name':{
		required: "Il campo nome � obbligatorio!",
		minlength: "Inserisci il nome !!!"
		},

		'form1-3-email':{
		required: "L' email � obbligatoria!",
		email: "L'Email inserita non � valida!"
		},
		
		'form1-3-message':{
		required: "Il campo messaggio � obbligatorio!",
		minlength: "Insersci il messaggio !!!"
		}
	},
	
	submitHandler : function(form){ form.submit(); }
		
	});
});
$(function(){
 
	$("#contatti").validate({
	rules:{
		'name':{
		required: true,
		minlength: 3
		},

		'email':{
		required: true,
		email: true
		},
		
		'message':{
		required: true,
		minlength: 5
		}
	},
	messages:{
		'name':{
		required: "Il campo nome è obbligatorio!",
		minlength: "Inserisci il nome !!!"
		},

		'email':{
		required: "L' email è obbligatoria!",
		email: "L'Email inserita non è valida!"
		},
		
		'message':{
		required: "Il campo messaggio è obbligatorio!",
		minlength: "Insersci il messaggio !!!"
		}
	},
	
	submitHandler : function(form){ form.submit(); }
		
	});
});
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
		required: "Il campo nome � obbligatorio!",
		minlength: "Inserisci il nome !!!"
		},

		'email':{
		required: "L' email � obbligatoria!",
		email: "L'Email inserita non � valida!"
		},
		
		'message':{
		required: "Il campo messaggio � obbligatorio!",
		minlength: "Insersci il messaggio !!!"
		}
	},
	
	submitHandler : function(form){ form.submit(); }
		
	});
});
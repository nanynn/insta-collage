
var boton = document.getElementById('btn');

boton.addEventListener('click', function(){

	var info = document.getElementsByClassName('dato-info')[0];
	var infoDos = document.getElementsByClassName('dato-info')[1];
	
	var mensaje=document.createElement('span');
	var texto=document.createTextNode("Debes poner un dato");
	var textoDos=document.createTextNode("Debe tener 6 digitos");

	info.appendChild(mensaje);

	if (info.value == ""){
	 	mensaje.appendChild(texto);
	} 
	else if(infoDos.value >= 6){
		mensaje.appendChild(textoDos);
	}
	else{
		info.removeChild(mensaje);
	}




})





// los navegadores leen las img como tipo texto, solo puede ser id.
function drag(ev){
	ev.dataTransfer.setData("text", ev.target.id); 
}
 //SIEMPRE vamos a poner esto, para que el navegador no haga lo que quiera
function finalDrop(ev){ 
	ev.preventDefault();
}

//traeme este dato de tipo texto
function drop(ev){
	ev.preventDefault();

	var dato = ev.dataTransfer.getData("text"); 
	ev.target.appendChild(document.getElementById(dato));
}


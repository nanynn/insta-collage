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
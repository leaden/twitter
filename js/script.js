window.onload = function(){
	document.getElementById("boton").addEventListener("click", agregar);
}

function agregar(){
	//recuperamos texto ingresado en texarea
	var tareas = document.getElementById('tarea').value;
	document.getElementById('tarea').value ="";

	//indicamos hubicacion de tareas recuperadas de texarea
	var cont = document.getElementById('contenedor');

	//creamos nuevos nodos elementos
	var nuevasTareas = document.createElement('div');
	var textoNuevoTarea =  document.createTextNode(tareas);
	var elementoContenedor = document.createElement('span');

	//asignamos padreas a nodos creados
	elementoContenedor.appendChild(textoNuevoTarea)
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);

	//creacion de checbox e iconos,se le da atributo y clase
	var chck = document.createElement('input');
	chck.type = 'checkbox';
	chck.setAttribute('class','çheck');
	var basura = document.createElement('span');
	basura.classList.add('fa','fa-trash-o');
	var cora = document.createElement('span');
	cora.classList.add('fa', 'fa-heart');

	//asignamos padres a nodos creados
	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);

	//agregar evento al hacer click, para eliminar o agregar elemento tachado al elementoContenedor
	chck.addEventListener('click', function(){
		elementoContenedor.classList.toggle('tachado');
	})

	//removemos icono basurero al hacer click sobre el 
	basura.addEventListener('click', function(){
		cont.removeChild(nuevasTareas);
	})

	// creacion function click para el corazon y le asignamos la clase red de css
	cora.addEventListener('click', function(){
		cora.classList.toggle('red');
	})

	//valida textarea que no este vacia
	if(tareas == null || tareas.length == 0){
		alert('¡Error! Debe ingresar tarea');
		return false;
	}

}







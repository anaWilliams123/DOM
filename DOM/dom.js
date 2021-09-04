const contenedor = document.querySelector(".flex-container");

function crearAuto(nombre,modelo,precio){
	img = "<img class='auto-img' src='auto.jpg'>";
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3>${modelo}</h3>`;
	precio = `<p>Precio: <b>$${precio}</b></p>`;
	return [img,nombre,modelo,precio];
}


let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 20; i++) {
	let modeloRandom = Math.round(Math.random()*10000);
	let precioRandom = Math.round(Math.random()*10+30);
	let auto = crearAuto(`auto ${i}`,`modelo ${modeloRandom}`,precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
    	document.querySelector(".key-data").value = modeloRandom
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML = auto;
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);

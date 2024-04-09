const selectorFigura = document.getElementById("figura")
const formulario = document.getElementById("formulario")
const resultados = document.getElementById("resultados")
const calcularBtn = document.getElementById("calcularBtn")
const nombreFigura = document.getElementById("nombreFigura")
calcularBtn.style.visibility = 'hidden'
let figuraSeleccionada = ""

function cambiarFigura(targetValue) {
	let figura = ""
	figura = targetValue
	// calcularBtn.style.display = 'block'

	switch(figura) {
		case "cuadrado":
			// calcularBtn.style.display = 'block'
			formulario.innerHTML = `
				<label for="lado">Introduzca la longitud para cada lado:</label>
				<br>
				<input type="number" id="lado" placeholder="Lado" class="number">
			`;
		break;

		case "rectangulo":
			// calcularBtn.style.display = 'block'
			formulario.innerHTML = `
				<label for="base">Ingrese un valor para la base:</label>
				<br>
				<input type="number" id="base" placeholder="Base" class="number">
				<br>
				<label for="altura">Asigne un valor para la altura:</label>
				<br>
				<input type="number" id="altura" placeholder="Altura" class="number">
			`;
		break;

		case "circulo":
			// calcularBtn.style.display = 'block'
			formulario.innerHTML = `
				<label for="radio">Asignele un valor al radio:</label>
				<br>
				<input type="number" id="radio" placeholder="Radio" class="number">
				`;
		break;

		default:
			formulario.innerHTML = `<p>Opcion incorrecta</p>`
	}
}


function calcular(target) {
	let perimetro
	let area
	let figura = ""
	figura = target

	switch(figura) {
		case "cuadrado":
			const lado = parseFloat(document.getElementById("lado").value);
			perimetro = lado * 4;
			area = lado * lado;
		break;

		case "rectangulo":
			const base = parseFloat(document.getElementById("base").value);
			const altura = parseFloat(document.getElementById("altura").value);
			perimetro = 2 * (base + altura);
			area = base * altura;
		break;

		case "circulo":
			const radio = parseFloat(document.getElementById("radio").value);
			perimetro = 2 * Math.PI * radio;
			area = Math.PI * radio * radio;
		break;

		default:
			formulario.innerHTML = `<p>Opcion incorrecta</p>`
	}
	resultados.innerHTML = `
		<p>Perímetro: ${perimetro.toFixed(2)}</p>
		<p>Área: ${area.toFixed(2)}</p>
	`;
}





/* manejo de eventos */

selectorFigura.addEventListener("click", (e) => {
	e.preventDefault()
	calcularBtn.style.visibility = 'visible'
})

selectorFigura.addEventListener("change", (e) => {
	e.preventDefault()
	cambiarFigura(e.target.value)
	figuraSeleccionada = e.target.value

	nombreFigura.innerText = `${figuraSeleccionada}`
})



calcularBtn.addEventListener("click", (e) => {
	calcular(figuraSeleccionada)
})





// botones
let btnGenerar = document.getElementById('btnGenerar')
let btnCalcular = document.getElementById('btnCalcular')
let btnMostrar = document.getElementById('btnMostrar')
// inputs a manejar
let lenEl = document.getElementById('lenEl')
// elementos a inyectar contenido
let resSpan = document.getElementById('resultados')
let numerosUl = document.getElementById('listaNum')



let LEN = 0
lenEl.addEventListener('change', async ({ target }) => {
	console.log(parseInt(target.value))
	LEN=parseInt(target.value)
})

let ranArr = []

function randomNumbers(min, max) {
	for(let i=0; i<LEN; i++) {
		let ran = Math.random() * (max - min) + min;
		let preparsed = ran.toFixed(1)

		ranArr.push(preparsed)
	}
}
/*
	Una vez generados los numeros
	y guardados en un arreglo, procedemos con nuestro programa
*/


let randomNumbersArray = {
	payload: []
}


btnGenerar.addEventListener('click', async (e) => {
	randomNumbers(1, 10)
	console.log(ranArr)
})



function prom(arr) {
    let sum = arr.reduce((acc, curr) => acc + parseFloat(curr), 0);
    return sum / arr.length;
}

function med(arr) {
    let sortedArr = arr.slice().sort((a, b) => parseFloat(a) - parseFloat(b));
    let mid = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
        return (parseFloat(sortedArr[mid - 1]) + parseFloat(sortedArr[mid])) / 2;
    } else {
        return parseFloat(sortedArr[mid]);
    }
}

function sd(arr) {
    let median = med(arr);
    let sumatory = arr.reduce((acc, curr) => acc + Math.pow(parseFloat(curr) - median, 2), 0);
    return Math.sqrt(sumatory / arr.length);
}



btnCalcular.addEventListener('click', async (e) => {
	let sorted = ranArr.sort((a, b) => parseFloat(a) - parseFloat(b));
	const promV = prom(ranArr);
	const medV = med(ranArr);
	const sdV = sd(ranArr);

	let numbersListHTML = ''
	sorted.forEach((el, i) => {
		let elem = parseFloat(el)
		numbersListHTML += `<li>${elem}</li>`
	})
	numerosUl.innerHTML = numbersListHTML

	resSpan.innerHTML = `
		<p>Promedio ${parseFloat(promV)}</p>
		<p>Mediana ${parseFloat(medV)}</p>
		<p>Desviacion estándar de los datos ${parseFloat(sdV)}</p>
		<p>Al trabajar con numeros reales, no podemos indicar numeros primos</p>
	`

})








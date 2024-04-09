function calcularConsumo() {
  var kilometros = parseFloat(document.getElementById('kilometros').value)
  var litros = parseFloat(document.getElementById('litros').value)
  var resultadoElem = document.getElementById('resultado')

  if(isNaN(kilometros) || isNaN(litros) || litros === 0) {
     resultadoElem.innerText = 'Por favor, ingrese valores válidos.'

  } else {
    var consumoPorKilometro = litros / kilometros
    resultadoElem.innerText = 'El consumo de combustible por kilómetro es: ' + consumoPorKilometro.toFixed(2) + ' litros/km.'

  }


}




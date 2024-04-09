let parametros = location.search.substring(1);
let arreglo = parametros.split("&");

function leerForm() {
    let output = '<div>';
    for (let i = 0; i < arreglo.length; i++) {
        let partes = arreglo[i].split("=");
        let parte1 = decodeURIComponent(partes[0]);
        let parte2 = decodeURIComponent(partes[1]);
        
        // Verificar si el valor es "on" y mostrar un mensaje apropiado
        let valorMostrar = parte2 === "on" ? "Seleccionado" : parte2;

        output += '<strong>'+parte1+'</strong>'+'<span>:  </span>'+'<span>'+valorMostrar+'</span>'+'<br><br>';
    }
    output += '</div>';
    document.getElementById('resultado').innerHTML = output;
}

const btn = document.getElementById('btn');
btn.addEventListener('click', leerForm);
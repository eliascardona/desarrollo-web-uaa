let form = document.getElementById('form')
let hyperlinkForFile = document.getElementById('link')
hyperlinkForFile.style.display = 'none';


async function parseAndDownloadJSON(data) {
    console.log(data);

    let jsonString = JSON.stringify(data);
    var blob = new Blob([jsonString], { type: 'application/json' });

    // Assign the binaries of out JSON string to a downloable JSON file
    hyperlinkForFile.href = window.URL.createObjectURL(blob);
    hyperlinkForFile.download = 'reporte-iva.json';

    // Hyperlink force event
    hyperlinkForFile.click();

}

let temp = {
	name: "a",
	age: "a",
	dir: {
		age: 12
	},
	arr: ["a", "b"]
}


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    var a = e.target.a.value
    var b = parseInt(e.target.b.value)

    if(isNaN(b)) {
        alert('Please enter a valid age.');
        return;
    }

	let data = {
		...temp,
		name: a,
		age: b,
	};

    await parseAndDownloadJSON(data);
});








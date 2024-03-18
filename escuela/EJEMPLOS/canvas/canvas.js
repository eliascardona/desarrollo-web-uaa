let px=20
let py=10
let ctx

function dibujar () {
	let canvaEl = document.getElementById("canvas")

	if(canvaEl.getContext) {
		// se establecen los planos a trabajar (2 o 3)
		ctx = canvaEl.getContext("2d")

		// se establecen los planos a trabajar (2 o 3)
		ctx.fillStyle = "#BB000"

		// se establecen los planos a trabajar (2 o 3)
		ctx.fillRect(px, py, 150, 75)
		ctx.fillStyle = "#00BB00"
		ctx.fillRect(px, py+75, 200, 75)

		ctx.fillStyle = "#0000BB"
		ctx.fillRect(px+150, py, 200, 75)

		ctx.fillStyle = "#FFFF00"
		ctx.fillRect(px+150, py+75, 200, 75)

	}


}

dibujar()
alert("JavaScript funcionando")



const body = document.querySelector('body')	
let sect = 0
let cont = 1
let contador = 2
let text1 = 3
let text2 = 4
let bestScore = 0

let posX
let posY
let contPuntos
let k
let d
let vel
let largoArr
let contDificultad 
let onCLick
let colorArr
let fruta
let del
let comprobarPosicionFruta

let interval

let snakeText = ['S', 'N', 'A', 'K', 'E']
let gameText = ['G', 'A', 'M', 'E']
let arr = []
let keyArr = []
let posiciones = []

class Posicion {
	constructor() {
		this.x
		this.y
	}
}



function game() {
	posX = -40
	posY = 0
	k = 'ArrowRight'
	vel = 100
	largoArr = 5
	contPuntos = 0
	contDificultad = 0

	arr = []
	keyArr = []
	posiciones = []


	
	creacionDeContenidoDOM()



	interval = setInterval(movSnake , vel)


	crearSnake()
	crearFruta()
	cambiarPosicion(k)



}	

function movSnake() {
	checkKey(k)
	crearSnake()
	chequearLargoArr()
	comerFruta()
	comerCola()
}

function checkKey(k) {
	if ( k == 'ArrowLeft' ) {
		keyArr.push('ArrowLeft')

		if ( keyArr[keyArr.length-2] == 'ArrowRight' ) {
			k = 'ArrowRight'
		}

		cambiarPosicion(k)

	}
	else if ( k == 'ArrowRight' ) {
		keyArr.push('ArrowRight')

		if ( keyArr[keyArr.length-2] == 'ArrowLeft' ) {
			k = 'ArrowLeft'
		}

		cambiarPosicion(k)

	}
	else if ( k == 'ArrowUp' ) {
		keyArr.push('ArrowUp')

		if ( keyArr[keyArr.length-2] == 'ArrowDown' ) {
			k = 'ArrowDown'
		}

		cambiarPosicion(k)

	}
	else if ( k == 'ArrowDown' ) {
		keyArr.push('ArrowDown')

		if ( keyArr[keyArr.length-2] == 'ArrowUp' ) {
			k = 'ArrowUp'
		}

		cambiarPosicion(k)

	} else { 
		k = keyArr[keyArr.length-1] 
		cambiarPosicion(k)
	}
}

function cambiarPosicion(h) {
	if ( h == 'ArrowLeft' ) {
		posX -= 20
		keyArr.push('ArrowLeft')

		limites()
	}
	else if ( h == 'ArrowRight' ) {
		posX += 20
		keyArr.push('ArrowRight')

		limites()
	}
	else if ( h == 'ArrowUp' ) {
		posY -= 20
		keyArr.push('ArrowUp')

		limites()
	}
	else if ( h == 'ArrowDown' ) {
		posY += 20
		keyArr.push('ArrowDown')

		limites()
	}
}

function limites() {
	if ( posX == 600 ) {
		posX = 0
	} else if ( posX == -20 ) {
		posX = 580
	} else if ( posY == 400 ) {
		posY = 0
	} else if ( posY == -20 ) {
		posY = 380
	} 
}

function crearSnake() {
	d = document.createElement('div')
	d.setAttribute('style', 'width: 18px; height: 18px; background-color: green; border: 1px solid black; position: absolute; left: ' + posX + 'px; top: ' + posY + 'px;')
	d.setAttribute('class', 'snake')

	p = new Posicion
	p.x = posX
	p.y = posY

	posiciones.push(p)
	cont.appendChild(d)
	arr.push(d)
}

function chequearLargoArr() {
	if ( arr.length >= largoArr ) {
		cont.removeChild(cont.childNodes[0]);
		arr.shift()
		posiciones.shift()
	}
}

function crearFruta() {
	comprobarPosicionFruta = true

	frX = Math.floor(Math.random() * 29) * 20
	frY = Math.floor(Math.random() * 19) * 20

	while ( comprobarPosicionFruta != false ) {
		comprobarPosicionFruta = false

		for (var i = 0; i < posiciones.length; i++) {
			if ( ( frX === posiciones[i].x ) && ( frY === posiciones[i].y ) ) {
				comprobarPosicionFruta = true

			}
		}

		if ( comprobarPosicionFruta == true ) {
			frX = Math.floor(Math.random() * 29) * 20
			frY = Math.floor(Math.random() * 19) * 20
		}
	}

	agregar2X = frX + 2
	agregar2Y = frY + 2

	fruta = document.createElement('div')
	fruta.setAttribute('style', 'width: 18px; height: 18px; background-color: blue; border-radius: 50%; border: 1px solid black; position: absolute; left: ' + agregar2X + 'px; top: ' + agregar2Y + 'px;')
	fruta.setAttribute('class', 'fruta')

	sect.appendChild(fruta)
}


function comerFruta() {
	if ( ( posX === frX ) && ( posY === frY ) ) {
		del = document.querySelector('.fruta')
		sect.removeChild(del)

		largoArr++
		contDificultad++
		contPuntos += 5

		if ( contDificultad == 5 ) {
			vel -= 50
			contDificultad = 0

		}

		imprimirContador()
		crearFruta()
	}
}

function comerCola() {
	for (var i = 0; i < posiciones.length-1; i++) {
		if ( ( posiciones[posiciones.length-1].x === posiciones[i].x ) && ( posiciones[posiciones.length-1].y === posiciones[i].y ) ) {

			removerTodo()
		}
	}
}

function imprimirContador() {
	contador.innerHTML = 'Points: ' + contPuntos
}


function cambiarColor() {
	colorArr = Math.floor(Math.random() * 255)
	return colorArr
}

function removerTodo() {
	clearInterval(interval)
	body.removeChild(sect)
	body.removeChild(sectText)


	if ( contPuntos > bestScore ) {
		bestScore = contPuntos

		h1.innerHTML = 'Best Score: ' + bestScore
	}


	divScore.innerHTML +=  contPuntos + '<br>'

	game()
}





sectPoints = document.createElement('section')
sectPoints.setAttribute('class', 'sectPoints')
sectPoints.setAttribute('style', 'width: 200px; height: 400px; position: relative; background-color: gray; padding: 20px; font-size: 25px; display: flex; justify-content: flex-start; align-items: center; flex-direction: column;')


h1 = document.createElement('h1')
h1.setAttribute('style', 'text-align: center; margin: 0px; padding: 0px; font-size: 25px;')
h1.innerHTML = 'Best Score: ' + bestScore

sectPoints.appendChild(h1)



divScore = document.createElement('div')
divScore.setAttribute('style', 'width: 100%; height: 100%; margin-top: 20px; text-align: left; overflow-y: scroll;')

sectPoints.appendChild(divScore)




body.appendChild(sectPoints)

game()

function key(event) {
	k = event.key
}


function pressDiv(press) {
	k = press
}
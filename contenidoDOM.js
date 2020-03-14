function creacionDeContenidoDOM() {
	sectText = document.createElement('section')
	sectText.setAttribute('class', 'sectText')
	sectText.setAttribute('style', 'height: 400px; margin: 0px 0px 0 px 0px; display: flex; justify-content: center; align-items: center;')


	text1 = document.createElement('div')
	text1.setAttribute('class', 'text1')
	text1.setAttribute('style', 'height: 403px; display: flex; justify-content: space-evenly; align-items: center; flex-direction: column; margin-right: 50px;')



	s = document.createElement('div')
	s.setAttribute('style', 'color: rgb(' + cambiarColor() + ', ' + cambiarColor() + ', ' + cambiarColor() + '); font-size: 70px;')
	s.innerHTML = 'S'

	text1.appendChild(s)

	s = document.createElement('div')
	s.setAttribute('style', 'color: rgb(' + cambiarColor() + ', ' + cambiarColor() + ', ' + cambiarColor() + '); font-size: 70px;')
	s.innerHTML = 'N'

	text1.appendChild(s)

	s = document.createElement('div')
	s.setAttribute('style', 'color: rgb(' + cambiarColor() + ', ' + cambiarColor() + ', ' + cambiarColor() + '); font-size: 70px;')
	s.innerHTML = 'A'

	text1.appendChild(s)

	s = document.createElement('div')
	s.setAttribute('style', 'color: rgb(' + cambiarColor() + ', ' + cambiarColor() + ', ' + cambiarColor() + '); font-size: 70px;')
	s.innerHTML = 'K'

	text1.appendChild(s)

	s = document.createElement('div')
	s.setAttribute('style', 'color: rgb(' + cambiarColor() + ', ' + cambiarColor() + ', ' + cambiarColor() + '); font-size: 70px;')
	s.innerHTML = 'E'

	text1.appendChild(s)




	text2 = document.createElement('div')
	text2.setAttribute('class', 'text2')
	text2.setAttribute('style', '; height: 403px;  display: flex; justify-content: space-evenly; align-items: center; flex-direction: column;')




	s = document.createElement('div')
	s.setAttribute('style', 'color: rgb(' + cambiarColor() + ', ' + cambiarColor() + ', ' + cambiarColor() + '); font-size: 70px;')
	s.innerHTML = 'G'

	text2.appendChild(s)

	s = document.createElement('div')
	s.setAttribute('style', 'color: rgb(' + cambiarColor() + ', ' + cambiarColor() + ', ' + cambiarColor() + '); font-size: 70px;')
	s.innerHTML = 'A'

	text2.appendChild(s)

	s = document.createElement('div')
	s.setAttribute('style', 'color: rgb(' + cambiarColor() + ', ' + cambiarColor() + ', ' + cambiarColor() + '); font-size: 70px;')
	s.innerHTML = 'M'

	text2.appendChild(s)

	s = document.createElement('div')
	s.setAttribute('style', 'color: rgb(' + cambiarColor() + ', ' + cambiarColor() + ', ' + cambiarColor() + '); font-size: 70px;')
	s.innerHTML = 'E'

	text2.appendChild(s)



	sect = document.createElement('section')
	sect.setAttribute('class', 'section')
	sect.setAttribute('style', 'width: 600px; height: 400px; position: relative;  margin: 0px 100px;')





	body.appendChild(sect)
	body.appendChild(sectText)
	sectText.appendChild(text1)
	sectText.appendChild(text2)





	cont = document.createElement('div')
	cont.setAttribute('class', 'container')
	cont.setAttribute('style', 'width: 100%; height: 100%; background-color: lightgray; position: relative; overflow: hidden; border: 2px solid black;')

	sect.appendChild(cont)


	contador = document.createElement('div')
	contador.setAttribute('class', 'contador')
	contador.setAttribute('style', 'margin-right: -3px; padding: 10px 20px; background-color: rgba(0, 0, 0, 0.4); color: white; font-size: 20px; float: right; display: flex; justify-content: center; align-items: center;')
	contador.innerHTML = 'Points: 0'

	sect.appendChild(contador)
}
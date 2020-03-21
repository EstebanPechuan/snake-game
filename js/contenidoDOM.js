function creacionDeContenidoDOM() {
	sectText = document.createElement('section')
	sectText.setAttribute('class', 'sectText')


	text1 = document.createElement('div')
	text1.setAttribute('class', 'text1')



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





	body.appendChild(sect)
	body.appendChild(sectText)
	sectText.appendChild(text1)
	sectText.appendChild(text2)





	cont = document.createElement('div')
	cont.setAttribute('class', 'container')

	sect.appendChild(cont)


	contador = document.createElement('div')
	contador.setAttribute('class', 'contador')
	contador.innerHTML = 'Points: 0'

	sect.appendChild(contador)
}
Funcion rta <- turnOn (xx,yy,rr)
	Definir y1 Como Real
	Definir limitX,limitY Como Entero
	limitX <- 1024
	limitY <- 768
	y1 <- (2*3.14*(rr))/360
	Si xx<0 O xx>limitX O yy<0 O limitY>768 Entonces
		Escribir 'Punto Central fuera de la pantalla'
	SiNo
		Si xx-rr<0 O xx+rr>1024 O yy-rr<0 O yy+rr>768 Entonces
			Escribir 'Imposible encender circulo fuera de la pantalla'
		SiNo
			Para i<-y1 Hasta 100 Con Paso y1 Hacer
				Escribir 'Iluminando Y en:',redon((yy-rr+i)-10),' Iluminando X en: ',(xx-rr+i)-10
			FinPara
		FinSi
	FinSi
FinFuncion

Algoritmo EncenderCirculo
	Definir a,b,c Como Entero
	Escribir 'Ingrese posicion de X'
	Leer a
	Escribir 'Ingrese posicion de Y'
	Leer b
	Escribir 'Ingrese Radio del circulo a encender en Pantalla'
	Leer c
	Escribir turnOn(a,b,c)
FinAlgoritmo

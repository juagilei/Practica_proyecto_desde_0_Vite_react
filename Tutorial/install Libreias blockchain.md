# Instalacion de librerias para conectar blockchain

Los vamos a la web [https://docs.family.co/](url) y seguimos las instrucciopnes de instalación en Getting Started.
- Instalar:

	En el teminal escribimos:
```
npm install connectkit wagmi viem@2.x @tanstack/react-query
```

- API Keys:
	- Nos comenta que debemos abrir una cuenta en walletConnect cloud
	- Una vez dentro creamos un proyecto "M10-practica-dapp-react".
	- Seleccionamos App la cual indica que se puede abrir cualquier wallet desde la App.
	- Obtenemos la id del proyecto y la copiamos.
	- Creamos un fichero .env de variables de entorno donde ponemos las claves del proyecto, este fichero no debe de subirse a git por que contiene las claves privadas y en git se podrian ver todas.
Escribimos en el archivo lo siguiente:
```
# WalletConnect

VITE_WALLET_CONNECT_PROJECT_ID = "clave que me da walletconnect del proyecto."

# NOTA: PONEMOS VITE POR QUE ESTAMOS USANDO VITE SI USARAMOS OTRO TEMPLATE SE PONDRIA EL OTRO 
´´´

La variable de entorno queda declara y si nos vamos a vite variables de entorno nos dice como importala.

```
	import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID

```


Quedaría de la siguiente forma:

```
const walletConnectProyectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

se pueden declarar varios archivos .env.

	- .env para producción.
	- .env.dev para desarrollo.
	- etc...

Para subirlo a git hay que ponerlo en gitignore.



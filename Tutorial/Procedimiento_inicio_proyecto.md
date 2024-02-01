# Practica_proyecto_desde_0_Vite_react

Vamos a realizar un proyecto desde cero utilizando un template de Vite para React y tailwind que es un framework para react.

Para ello vamos a realizar los siguientes pasos.

## 1. Instalación del template vite.

	Ejecutamos el siguiente comando en la teminal:
```		
	npm create vite@latest nombre del proyecto -- --template react.
```


	Se crea una carpeta con el nombre del proyecto, en el caso de que la carpeta ya esté creada podemos poner un punto en vez del nombre del proyecto " . " de esta forma se instala directamante en la carpeta.

## 2. Instalación de npm en la carpeta:

	Ejecutamos el siguiente comando en la terminal:
```json
	
	npm install

```


	Se instalan dependencias de npm, node modules y pakage-lock.json

	Ejencutanco el comando:
```
	npm run dev
```

	Inicializamos la web y nos da un puerto donde poder verla.
	Para poder verla usamos cmnd y click en la url del puerto.
	Para cerrar la inicialición lo hacemos con crtl c.

## 3. Instalación de Tailwind:

Me voy a su web
[ https://tailwindcss.com](url) le doy a get started y luego selecciono la opción framework guides, donde elijo la guia de vite:

	- Ejecutamos el comando:

```

	npm install -D tailwindcss postcss autoprefixer

```
	-D indica que instala dependencias de desarrollo yb estas se instalan a parte en el pakage.json.

	- Ejecutamos el siguiente comando:

```
	npx tailwindcss init -p
```
	El cual nos genera dos ficheros: tailwind.config.js y postcss.config.js

	- Modificamos el fichero tailwind.config.js, pegando los siguientes comandos:
```
	/** @type {import('tailwindcss').Config} */
	export default {
  	content: [
    	"./index.html",
    	"./src/**/*.{js,ts,jsx,tsx}",
  	],
  	theme: {
    extend: {},
  	},
  	plugins: [],
	}
```
	- Modificamos el archivo index.css, borrando lo que tiene y poniendo los siguiente:
```
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
```

Después de estas modificaciones ejecuatmos la aplicación para comprobar las modificaciones

```
	npm run dev
```
Nos recomienda modificar un classname en el arhivo App.jsx para ver si funciona bien:
```
	export default function App() {
  	return (
   	 <h1 className="text-3xl font-bold underline">
    	  Hello world!
    	</h1>
  	)
	}
```
Comprobamos que esta todo coprrecto y que la modificación ha funcionado.

	- Borramos todo lo que no necesitemos del fichero App.jsx:

Vamos a borrar logos que se ponen por defecto.

```
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
```
```
	<div>
        	<a href="https://vitejs.dev" target="_blank">
          	<img src={viteLogo} className="logo" alt="Vite logo" />
       	 </a>
        	<a href="https://react.dev" target="_blank">
         	 <img src={reactLogo} className="logo react" alt="React logo" />
       	 </a>
      	</div>
```
	- Eliminamos el archivo App.css por que no lo vamos a usar al tener Tailwind. 



	



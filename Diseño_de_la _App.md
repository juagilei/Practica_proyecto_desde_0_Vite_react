# Diseño de la App

## MODIFICACIÓN DE LA PESTAÑA DE NAVEGACIÓN:

  - Archivo index.html.
  - Trabajamos en el head.
  - Comenzamos con el icono de la pestaña de navegación (favicon) y cambiamos el de vite por el de blockmaker 
  - Borrando de la carpeta public vite.svg y poniendo Blockmaker_logo.png.
  - Cambiamos el href por el logo de blockmaker.
  - El título tambien lo cambiamos por Blockmaker Erc20 Token.

```html
 <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/Blockmaker_logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blockmaker Erc20 Token</title>
  </head>
```

## Creación de las carpetas de trabajo pages y components:

	Añadimos a la carpeta del proyecto las carpetas pages y components dentro de la carpeta de trabajo src.

## Creación de las partes de la aplicacion Header, Main, Footer:

Estos archivos y las funcones que declaramos las ponemos con mayusculas por que son componentes.

	
- Creamos un archivo Header.jsx dentro de la carpeta components con el contenido básico:

```html
export default function Header() {
    return <header> esto es el header </header>
}
```
- Creamos un archivo Footer.jsx dentro de la carpeta components con el contenido básico:
```html
export default function Footer() {
    return <footer> esto es el footer</footer>
}
```
- Modificamos el archivo App.jsx:

	- Eliminamos todo lo que no sea necesario.
	- Importamos los componentes Header y Footer.
	- Añadimos una etiqueta de main que luego ya modificaremos.
```
	import Header from "./components/header"
	import Footer from "./components/footer"

	function App() {

  	return (
    	<>
    	<Header />
    	<main>Esto es el contenido principal</main>
    	<Footer />

    	</>
  	)
	}

	export default App
```




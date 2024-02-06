# Contracts

- Creamos una carpeta en src llamada contracts donde introduciremos todos los datos de los contratos con los que queremos actuar.

- Para ello dentro creamos otra carpeta ABIs donde guardaremos los ABI de los contratos:
	- Creamos el archivo BlockmakerTokenABI.js donde introducimoe el ABI: 
		- Escribo:
		```jsx
			export const blockmakerTokenABI = "Pego el contenido del ABI"
		```
	nota: Al no hacer export default en el index que creamos basta con poner 

		```
			export * from './blockmakerTokenABI'
		```



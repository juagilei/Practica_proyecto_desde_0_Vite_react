# Diseño del Header:

### - Vamos a introducir el logo grande de blockmaker:
```html
export default function Header() {
    return <header> 
        <img src="/public/blockmaker-full-logo.png"/>
        esto es el header 
        </header>
}
```

### - Hacemos el diseño para colocar bien tamaños y posiciones con Tailwind:

	- Colocamos el contenido en línea usando flex y damos un tamaño mas pequeño a la imagen.
		Seguimos las intrucciones que tenemos en Tailwind en la coluna de la izquierda.

```html
export default function Header() {
    return <header className = "flex px-8 py-4 border-b"> 
        <img src="/public/blockmaker-full-logo.png" alt="Blockmaker logo" width={250}/>
        <button className="bg-gray-200 rounded-md">conectar wallet</button>
        </header>
}}
```

	- Dentro de la etiqueta, declaramos una clase y para poner los elementos en línea usamos flex.
	- Para dar un poco de padding en el eje de las x usamos px-8.
	- Para dar un poco de padding en el eje de las y usamos py-4.
	- Si queremos un padding total se usa p-2 por ejemplo.
	- Ajustamos el contenido para que quede lo mas separado posible justify-between.
	- Alineado vertical items center.
	- ponemos el background blanco bg-white.
	- Añadimos un borde solompor debajo border-b (border bottom).
	- redondeamos las esquinas del boton con rounded-md.
	- Para el tamaño de la imagen usamos widht.
	- Añadimos el boton para conectar wallet le damos un color gris claro y redondeamos los cantos.

### - Diseño responsivo:

	Vamos a realizar un diseño responsibo para que la aplicación se pueda usar en moviles o en pantallas de escritorio desktop.

	Con tailwind esto es muy simple, vamos a la web y lo vemos, tenemos 5 tamaños y se identifican como en las tallas de las camisetas (sm, md, lg, xl, 2xl).

	Usaremos dos tamaños y en función del tamaño de la ppantalla pondremos un logo u otro mas simple.

	Quedando de la siguiente forma:
```html
export default function Header() {
    return <header className = "flex px-8 py-4 border-b justify-between items-center bg-white"> 
    {/* Logo para mobile*/}
        <img src="/public/blockmaker-small-logo.png" className= "sm:hidden" alt="Blockmaker-logo" width={75}/>
    {/* Logo para desktop */}
    {/* Esta es la forma de añadir comentarios */} 
        <img src="/public/blockmaker-full-logo.png" className="hidden sm:flex" alt="Blockmaker-logo" width={250}/>
       
        <button className="bg-gray-200 rounded-md">conectar wallet</button>
        </header>
}
```
	- Usamos la palabra hidden para esconder la imagen.
	- La primera imagen está expuesta hasta que el tamaño de la pantalla llega al tamaño sm.
	- La segunda imagen esta escondida y aparece cuando la pantalla supera el tamaño sm.

## Conclusiones.

Tailwind es muy sencillo de usar. Solo ha que poner una className en la etiqueta para diseñar el css de ese elemento.
Siguendo las instrucciones en la web de tailwind se ven ejemplos de aplicación.
En el diseño responsobo en la tablña de tailwind se ven perfectamente los límites de cada tamaño.


	
## Añadimos el boton de conectar wallet:

Con ConnectKit y siguiendo sus instrucciones añadimos el boton de conectar wallet y luego ponemos la opción show balance para ver el balance de la wallet.
El codigo queda de la siguiente forma:
```
import { ConnectKitButton } from "connectkit";
export default function Header() {
    return <header className = "flex px-8 py-4 border-b justify-between items-center bg-white"> 
    {/* Logo para mobile*/}
        <img src="/public/blockmaker-small-logo.png" className= "sm:hidden" alt="Blockmaker-logo" width={75}/>
    {/* Logo para desktop */}
    {/* Esta es la forma de añadir comentarios */} 
        <img src="/public/blockmaker-full-logo.png" className="hidden sm:flex" alt="Blockmaker-logo" width={250}/>
       
        <ConnectKitButton showBalance />
        </header>
}

```

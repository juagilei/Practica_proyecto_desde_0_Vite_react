# Diseño del Footer:

Vamos a diseñar el Footer, normalmente es donde se pone el tema de derechos de autor y enlaces de contacto etc....

Como cosa curiosa para poner el símbolo de copyright de pone de la siguiente forma "&copy;".

```html
export default function Footer() {
    return (
    <footer className="text-xs py-4 px-3 sm:p-8 sm:text-lg bg-white border-t shadow-md flex justify-center"> 
       <p> Derechos de autor &copy; {new Date().getFullYear()} Blockmaker Academy </p>
    </footer>
    )
}
```
Diseñamos el Footer con Tailwind poniendo className="":

- text-xs => tamaño del texto xs.
- py-4 px-3 => padding eje y 4 eje x 3.
- sm:p-8 => cuando el tamaño de la pantalla es sm padding 8 en los dos ejes.
- sm: text-lg => cuando el tamaño de la pantalla es sm el tamaño de la letra es lg.
- bg-white => fondo blanco.
- border-t => línea en el borde a arriba "border top".
- shadow-md => Sombra en la parte inferior.
- flex justify-center => centra el contenido.

Poner el año del copyright usando javascript en vez de poner directamente el año:

```js
{new Date().getFullYear()}
```
Nota:
Para escribir js en html hay que ponerlo entre { }.

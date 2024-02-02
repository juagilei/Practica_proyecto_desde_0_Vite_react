# UI => USER INTERFACE

Es una carpeta que se recomienda poner para poner dentro todos aquellos componentes que se reutilizan como pueden ser Layouts, Botones etc.

## Layouts:

	Carpeta donde puedes poner las app que puedes usar en muchas paginas, por ejemplo el Header y el Footer es un ejemplo claro en el que en cada pagina de la aplicación deben de poner lo mismo.

	Una vez hecho el componente debo de englobar dentro del componente al children hijo por lo que debo de modificar el APP.jsx para que el AppLayout que he creado funcione.

AppLayout quedaría de la siguiente forma:

```js
import Header from "../../Header"
import Footer from "../../Footer"
import PropTypes from "prop-types"
{/* Es necesario validar la props de children*/}
export default function AppLayout({ children }) {
    return (
        <>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}
AppLayout.propTypes = {
    children: PropTypes.node.isRequired}
```

La modificadión de App.jsx cambiaria de esta forma:

```html
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
A este otra forma:

```html

import AppLayout from "./components/ui/layouts/AppLayout"

function App() {

  return (
    
    <AppLayout>
      <p>Esto es el chindren que envio</p>
    </AppLayout>

  )
}
```
De esta forma siempre que quiera poner el mismo header y el mismo footer tan solo tengo que importar AppLayout y poner lo demás entre las etiquetas de AppLAyout.

### Index..js:
Se usa para indexar las exportaciones de componentes, si las direcciones de exportacion son muy largas o tienes que importar muchos componentes con el index puedo exportar todas las app que esten dentro de la carpeta donde esta el index y solo tienes que poner import { nombres de los componentes}






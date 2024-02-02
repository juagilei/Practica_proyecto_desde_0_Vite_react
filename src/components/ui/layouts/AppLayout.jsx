{/* Declaro este archivo para introducir el header y el footer en todas las paginas
por lo que creo un componente que pondra el header y el footer y le digo que recibe un children 
que será la parte del main que es lo que cambiará en cada página */}

import Header from "../../Header"
import Footer from "../../Footer"
import PropTypes from "prop-types"
{/* Es necesario validar la props de children*/}
export default function AppLayout({ children }) {
    return (
        <>
        <Header />
        {/* Voy a dar un ancho mínimo al main en este caso que tenga un 85% como mínimo del total que se ve.
        mx-auto es para centrar automatico el contenido margin horizontal "mx" */}
        <main className="mx-auto min-h-[85vh]">{children}</main>
        <Footer />
        </>
    )
}
AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}
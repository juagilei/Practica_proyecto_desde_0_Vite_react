{/* Declaro este archivo para introducir el header y el footer en todas las paginas
por lo que creo un componente que pondra el header y el footer y le digo que recibe un children 
que será la parte del main que es lo que cambiará en cada página */}

import Header from "../../Header"
import Footer from "../../Footer"

export default function AppLayout({ children }) {
    return (
        <>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
    
}
export default function Footer() {
    return (
    <footer className="text-xs py-4 px-3 sm:p-8 sm:text-lg bg-white border-t shadow-md flex justify-center"> 
       <p> Derechos de autor &copy; {new Date().getFullYear()} Blockmaker Academy </p>
    </footer>
    )
}
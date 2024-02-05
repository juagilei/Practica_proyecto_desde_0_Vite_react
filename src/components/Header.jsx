import { ConnectKitButton } from "connectkit";
export default function Header() {
    return <header className = "flex px-8 py-4 border-b justify-between items-center bg-white"> 
    {/* Logo para mobile*/}
        <img src="/public/blockmaker-small-logo.png" className= "sm:hidden" alt="Blockmaker-logo" width={75}/>
    {/* Logo para desktop */}
    {/* Esta es la forma de añadir comentarios */} 
        <img src="/public/blockmaker-full-logo.png" className="hidden sm:flex" alt="Blockmaker-logo" width={250}/>
       
        <ConnectKitButton />
        </header>
}

  
{/* Home lo voy a sustuir por main en App.jsx */}
{/* Introduzco un hook de wagmi para que me indique el estado de la conexión de la wallet */}
import { LoadingSpinner, Button} from "../components/ui";
import { useAccount } from "wagmi";
export default function Home() {
        const { address, isConnecting, isDisconnected } = useAccount();
        if (isConnecting) return <div>Connecting...</div>;
        if (isDisconnected) return <div>Disconnected</div>;
    return(
    <div>
        <h1> Home </h1>
        <div> Connected Wallet: {address} </div>
        <LoadingSpinner />
        <Button>Mi componente boton</Button>
    </div>
    )

}

{
  /* Home lo voy a sustuir por main en App.jsx */
}
{
  /* Introduzco un hook de wagmi para que me indique el estado de la conexión de la wallet */
}
import { TokenBalance, Owner } from "../components";
import { Button, ErrorInfo, TextInput, Title } from "../components/ui";
import { useAccount } from "wagmi";
export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount();
  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>Disconnected</div>;
  return (
    <div>
      <h1> Home </h1>
      <div> Connected Wallet: {address} </div>
      <Owner />
      <Button>Mi componente boton</Button>
      <ErrorInfo message="este es el mensaje de error" />
      <TextInput />
      <Title> Este componente muestra el título que quieres poner </Title>
      <TokenBalance />
    </div>
  );
}

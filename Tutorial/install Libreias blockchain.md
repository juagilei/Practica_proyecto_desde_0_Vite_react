# Instalacion de librerias para conectar blockchain 
## Instalación del boton ConnectKit boton que muestra la opción de conectar cualquier wallet.

Los vamos a la web [https://docs.family.co/](url) y seguimos las instrucciopnes de instalación en Getting Started.

## 1. Install
Install ConnectKit and its peer dependencies:


- Instalar:

	En el teminal escribimos:
```
npm install connectkit wagmi viem@2.x @tanstack/react-query
```

## 2. API Keys:

ConnectKit utilises WalletConnect's SDK to help with connecting wallets. WalletConnect 2.0 requires a projectId
which you can create quickly and easily for free over at WalletConnect Cloud.

- API Keys:
	- Nos comenta que debemos abrir una cuenta en walletConnect cloud
	- Una vez dentro creamos un proyecto "M10-practica-dapp-react".
	- Seleccionamos App la cual indica que se puede abrir cualquier wallet desde la App.
	- Obtenemos la id del proyecto y la copiamos.
	- Creamos un fichero .env de variables de entorno donde ponemos las claves del proyecto, este fichero no debe de subirse a git por que contiene las claves privadas y en git se podrian ver todas.
Escribimos en el archivo lo siguiente:
```
# WalletConnect

VITE_WALLET_CONNECT_PROJECT_ID = "clave que me da walletconnect del proyecto."

# NOTA: PONEMOS VITE POR QUE ESTAMOS USANDO VITE SI USARAMOS OTRO TEMPLATE SE PONDRIA EL OTRO 
```


La variable de entorno queda declara y si nos vamos a vite variables de entorno nos dice como importala.

```
	import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID

```


Quedaría de la siguiente forma:

```
const walletConnectProyectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;
```

se pueden declarar varios archivos .env.

	- .env para producción.
	- .env.dev para desarrollo.
	- etc...

Para no subirlo a git hay que ponerlo en gitignore.

Tambien subimos un archivo .env.example donde defines las variables de entorno y aqui otros desarrolladores pueden concer las variables.



- Tambien nos indica que necesitamos una proyect ID por lo que necesitaremos una key para interactuar la blockchain, podemos elegir entre infura o alchemy.

	En Infura ya hicimos algunas prácticas y tenemos key.
	Vamos a probar en alchemy.com y creamos una cuenta.

	Queqdando el archivo .env de la sigiente forma, donde las key son la que tenemos nosotros 	privadas:


```
# NOTA: PONEMOS VITE POR QUE ESTAMOS USANDO VITE SI USARAMOS OTRO TEMPLATE SE PONDRIA EL OTRO 

# WalletConnect
VITE_WALLET_CONNECT_PROJECT_ID=key WalletConnect

# Alchemy
VITE_ALCHEMY_PROJECT_ID=key Alchemy

# Infura
VITE_INFURA_PROJECT_ID=key Infura
```
## 3. Implementation
It is recommended to wrap your app within a new component that will help you set up ConnectKit and its dependencies.

Start by creating a new component called 
Web3Provider. Here you will import the required providers and create a config using wagmi's createConfig
 method. ConnectKit supplies a pre-configured getDefaultConfig function to simplify the process of creating a config.

- Me creo una carpeta llamada config la que se crea para poner distintas configuraciones en distintas librerías.
	- Creo la configuración para wagmi libreía que nos ayuda a trabjar con mejor con hooks en REACT:
		1. Creo un archivo Web3Provider.tsx y copio la informacion que tengo en el manual de instalación aunque lo hemos variado un poco. Hay que tener encuneta que los nombres de las keys deben de ser los mismos que lops que tengo en el archivo .env.
		2. Además introduzco como red de blockchain { sepolia } para indicar que voy a trabajar en la red de sepolia.
		3. EL archivo queda de la siguiente manera:
```jsx
import { WagmiProvider, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import React from "react";

const config = createConfig(
  getDefaultConfig({

    // Required API Keys
    walletConnectProjectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID!,

    // Required App Info
    appName: "Blockmaker ERC20 Token",

     // Your dApps chains
     chains: [sepolia],
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
```

- Una vez configurado el archivo wagmi.js, necesito envolver la aplicación con wagmi en el archivo App.jsx, ademas de introducir también ConnectKit:
	1. Procedo a envolver todo lo que tengo en App.	2. Quedando el archivo de la siguiente forma:
```jsx
import { Web3Provider } from "./config/Web3Provider";
import { ConnectKitButton } from "connectkit";
import { AppLayout } from './components/ui/layouts';
import { Home } from './pages';


function App() {
  return (
  <Web3Provider>
    <AppLayout>
      <ConnectKitButton />
      <Home />
    </AppLayout>
  </Web3Provider>
   


  )
}
export default App
```
## 4.Ubicación del boton:

Una vez instalado el boton de conexión de wallet, lo vanos a poner en el header y a quitar del App, de esta forma se quedará arriba en el header.

	- Borro todo lo referente a ConnectKitButton de App y lo pongo en el header del cual quito el boton que tenía de conectar wallet, quedando el codigo de la siguiente forma:

```jsx
mport { ConnectKitButton } from "connectkit";
export default function Header() {
    return <header className = "flex px-8 py-4 border-b justify-between items-center bg-white"> 
    {/* Logo para mobile*/}
        <img src="/public/blockmaker-small-logo.png" className= "sm:hidden" alt="Blockmaker-logo" width={75}/>
    {/* Logo para desktop */}
    {/* Esta es la forma de añadir comentarios */} 
        <img src="/public/blockmaker-full-logo.png" className="hidden sm:flex" alt="Blockmaker-logo" width={250}/>
       
		{/* Añado la conexión a la wallet */}
        <ConnectKitButton />
        </header>
}
```
 









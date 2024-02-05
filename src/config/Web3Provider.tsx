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
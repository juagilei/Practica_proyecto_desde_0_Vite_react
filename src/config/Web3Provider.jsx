import PropTypes from "prop-types"
import { WagmiProvider, createConfig } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { sepolia } from "wagmi/chains";


const config = createConfig(
  getDefaultConfig({
    chains: [sepolia],
    appName: 'Blockmaker ERC20 TOKEN',
    walletConnectProjectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider debugMode>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
Web3Provider.propTypes={
  children: PropTypes.node.isRequired
}

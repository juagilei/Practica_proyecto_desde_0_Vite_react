import { createConfig } from 'wagmi'
import { getDefaultConfig } from 'connectkit'
import { sepolia } from 'wagmi/chains'

export const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: import.meta.env.VITE_ALCHEMY_PROJECT_ID,
    walletConnectProjectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,

    // Required
    appName: 'Blockmaker ERC20 Dapp',
    chains: [sepolia]
  })
)
import { ConnectKitProvider } from 'connectkit'
import { WagmiProvider } from 'wagmi'
import { AppLayout } from './components/ui/layouts'
import { config } from './config/wagmi'
import { Home } from './pages'

function App() {
  return (
    <WagmiProvider config={config}>
      <ConnectKitProvider mode="light">
        <AppLayout>
          <Home />
        </AppLayout>
      </ConnectKitProvider>
    </WagmiProvider>
  )
}

export default App

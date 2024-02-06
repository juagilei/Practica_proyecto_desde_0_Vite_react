
import { AppLayout } from './components/ui/layouts'
import { Web3Provider } from './config/Web3Provider'
import { Home } from './pages'

function App() {
  return (
    <Web3Provider>
        <AppLayout>
          <Home />
        </AppLayout>
    </Web3Provider>
  )
}

export default App

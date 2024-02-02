
import AppLayout from "./components/ui/layouts/AppLayout"
import { Home } from "./pages"

function App() {
  const walletConnectProyectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID
  return (

    <AppLayout>
      <Home />
    </AppLayout>

  )
}

export default App

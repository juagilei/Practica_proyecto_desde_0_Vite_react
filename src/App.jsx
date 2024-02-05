import { Web3Provider } from "./config/Web3Provider";
import { AppLayout } from './components/ui/layouts';
import { Home } from './pages';


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

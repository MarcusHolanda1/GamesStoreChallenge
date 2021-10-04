import "./styles/global.css";
import Routes from "./Routes";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <CartContextProvider>
        
      <Routes />
    
    </CartContextProvider>
  );
}

export default App;

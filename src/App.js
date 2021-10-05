import "./styles/global.css";
import Routes from "./Routes";
import { ProductContext } from "./context/ProductContext";
import { CartContext } from "./context/CartContext/index";

function App() {
  return (
    <ProductContext>
      <CartContext>
        <Routes />
      </CartContext>
    </ProductContext>
  );
}

export default App;

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Index from "./pages";
import ProductPage from "./pages/productPage";
import Navigation from "./components/navigation";
import CartPage from "./pages/cartPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;

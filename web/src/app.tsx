import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Index from "./pages";
import ProductPage from "./pages/productPage";
import Navigation from "./components/navigation";
import CartPage from "./pages/cartPage";
import { LogInPage } from "./pages/LogInRegisterPage";
import { RegisterPage } from "./pages/LogInRegisterPage";
import Footer from "./components/footer";
import AccountPage from "./pages/accountPage";

function App(): JSX.Element {
  return (
    <>
    <BrowserRouter>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </div>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;

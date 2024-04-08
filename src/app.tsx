import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Index from "./pages";
import ProductPage from "./pages/productPage";
import Navigation from "./components/navigation";

function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;

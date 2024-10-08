import './App.css';
import Cart from './components/cart/Cart';
import Products from './components/products/Products';
import AppNavbar from './components/navbar/AppNavbar';
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marcas from './components/Marcas';
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContext';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';


function App() {
  return (
    <div className="container-fluid">
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/confirmation/:orderId"} element={<Confirmation/>} />
            <Route path={"/marcas"} element={<Marcas />} />
            <Route path={"/*"} element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

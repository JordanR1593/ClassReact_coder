
import './App.css';
import Carrito from './components/Carrito';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom";
import CartContextProvider, {CartContext} from "./components/CartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          
          <Route path="/" element={<ItemListContainer/>}/>

          <Route path="/item" element={<ItemDetailContainer/>}/>

          <Route path="/category/:idCategory" element={<ItemListContainer/>}/>

          <Route path="/item/:idName" element={<ItemDetailContainer/>}/>

          <Route path="/Carrito" element={<Carrito/>}/>

        </Routes>
        
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

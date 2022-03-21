
import './App.css';
import CarShop from './components/CarShop';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import CartContextProvider from "./components/CartContext";

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

          <Route path="/CarShop" element={<CarShop/>}/>

        </Routes>
        
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

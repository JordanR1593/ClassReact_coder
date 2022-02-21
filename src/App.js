
import './App.css';

import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        
        <Route path="/" element={<ItemListContainer/>}/>

        <Route path="/item" element={<ItemDetailContainer/>}/>

        <Route path="/category/:idCategory" element={<ItemListContainer/>}/>

        <Route path="/item/:idName" element={<ItemDetailContainer/>}/>

      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;


import './App.css';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
    <Navbar />
    {/* <ItemListContainer contenido="Hola mundo ItemListContainer" /> */}
    <ItemDetailContainer/>
    
    <ItemCount/>
    </>
  );
}

export default App;

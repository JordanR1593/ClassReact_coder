
import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Productos from './components/productos';


function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer contenido="Hola mundo ItemListContainer" />
    <Productos/>
    
    <ItemCount/>
    </>
  );
}

export default App;

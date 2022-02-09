
import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer contenido="Hola mundo ItemListContainer" />
    <ItemCount/>
    </>
  );
}

export default App;

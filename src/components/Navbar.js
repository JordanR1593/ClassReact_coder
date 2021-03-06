import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

//Componente de la barra de navegacion que en ruta las elecciones de visualizacion del cliente
const Navbar =()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >TiendaMuN</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/category/1" className="nav-link" >Reloj pared</Link>
              </li>
              <li className="nav-item">
                <Link to="/category/2" className="nav-link" >Reloj pulso</Link>
              </li>
              <li className="nav-item">
                <Link to="/category/3" className="nav-link"  >Reloj despertador</Link>
              </li>
              
            </ul>
          </div>
        </div>
        <Link to="./CarShop"><CartWidget /></Link>
      </nav>

    );
}
export default Navbar
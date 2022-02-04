import CartWidget from './CartWidget'
const Navbar =()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TiendaMuN</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Categoria 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Categoria 2</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Acciones
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Comprar</a></li>
                  <li><a className="dropdown-item" href="#">Vender</a></li>
                  <li><a className="dropdown-item" href="#">Alquilar</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>

    );
}
export default Navbar
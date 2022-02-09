import { useState } from "react";
const ItemCount = () => {
    
    const [Productos, setProductos] = useState(1); 

    const incrementar = () => {
        if((Productos>=1)&&(Productos<=4)){
            setProductos(Productos+1);
        }
        
    }
    const disminuir = () => {
        
        if((Productos>=2)&&(Productos<=5)){
            setProductos(Productos-1);
        }
    }
    const mensaje = () => {
        
        alert(`Has añadido al carrito ${Productos} items`)
    }

    
    return (
        <div className="Cuenta">
            <button type="button" className="btn btn-outline-primary" onClick={incrementar}>+</button>
            <p>{Productos}</p>
            <button type="button" className="btn btn-outline-danger" onClick={disminuir}>-</button>
            <button type="button" class="btn btn-primary" onClick={mensaje}>Añadir a Carrito</button>
        </div>
        );
}

export default ItemCount;
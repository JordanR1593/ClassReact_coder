import { useState } from "react";

const ItemCount = ({onAdd, stock}) => {
    
    const [Products, setProducts] = useState(1); 
    
    const incrementar = () => {
        if((Products>=1)&&(Products<=stock-1)){
            setProducts(Products+1);
        }
        
    }
    const disminuir = () => {
        
        if((Products>=2)&&(Products<=stock)){
            setProducts(Products-1);
        }
    }
    
   
  
    
    return (
        <div className="Cuenta">
            <button type="button" className="btn btn-outline-primary" onClick={incrementar}>+</button>
            <p>{Products}</p>
            <button type="button" className="btn btn-outline-danger" onClick={disminuir}>-</button>
            <button type="button" className="btn btn-outline-danger" onClick={()=>{onAdd(Products)}}>Agregar</button>
            
        </div>
        );
}


export default ItemCount;

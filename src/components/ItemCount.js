import { useState } from "react";
//Componente para aumentar o disminuir cantidad de items inmediatamente seleccionado un producto para compra
const ItemCount = ({onAdd, stock}) => {
    
    const [Products, setProducts] = useState(0); 
    
    const incrementar = () => {
        if((stock>=1)&&(Products<=stock-1)){
            setProducts(Products+1);
        }
        
    }
    const disminuir = () => {
        
        if((stock>=2)&&(Products>0)){
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

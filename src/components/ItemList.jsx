
import {Item, relojs} from './Item'
import {  useEffect, useState } from "react";

const ItemList= ()=>{

    const [Items, setItems] = useState([]); 
    function getItems(){
        Item(2000, relojs)
        .then((dato)=>setItems(dato))
        .then((data)=>{console.log(data) })
        
        .catch((error)=>console.log(error))
    }
    console.log(Items)
   
    useEffect(()=>{
        setTimeout(() => {
            getItems()
        }, 0);
    },[])  
    
     return(
        
        
        Items.map(elem=>(
            
                <>
            
                <div className="card"  >
                <img className="card-img-top" key={elem.id} src={elem.url} alt={elem.name}/>
                <div className="card-body">
                    
                    <p className="card-text">$ {elem.cost}</p>
                    <p className="card-text">{elem.description}</p>
                </div>
                </div>
                
                </>
            )
            
        )    
     )
        
        
    
}

export default ItemList


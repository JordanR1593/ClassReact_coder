import { Link } from 'react-router-dom';

const ItemList= (props)=>{

     
    
     return(
        
        
        
            props.item.map((element=>{
                return(
                <>
                
                <div className="card"  >
                <img className="card-img-top" key={element.id} src={element.url} alt={element.name}/>
                <div className="card-body">
                    <h3 className="card-text"> {element.name}</h3>
                    <p className="card-text">$ {element.cost}</p>
                    <p className="card-text">{element.description}</p>
                    <button ><Link to={"/item/"+element.id} className="nav-link"  >Ver detalle</Link></button>
                </div>
                </div>
                
                </>
    
     )}))
                
            
            
        )    
     
        
        
    
}

export default ItemList


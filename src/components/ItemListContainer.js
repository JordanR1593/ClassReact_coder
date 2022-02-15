import ItemList from "./ItemList"


const ItemListContainer = (props)=>{
    return(
        <>
            {props.contenido}
            <div className="carta">
            <ItemList/>
            </div>
            
        </>
        
    )
}

export default ItemListContainer
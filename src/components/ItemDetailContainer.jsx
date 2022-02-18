import {  useEffect, useState } from "react";
import {Item} from './Item'
import ItemDetail from "./ItemDetail" 
import ItemCount from "./ItemCount";
const {relojs} = require("./Item")
console.log(relojs)
 const ItemDetailContainer = ()=>{
    const [Items , setItems] = useState({})
    

    function getItem(){
        Item(2000,relojs[1])
            .then((data)=> setItems(data))
            .catch(error=>console.log(error))
    }
    useEffect(() => {
        getItem()
    }, []);
    console.log(Items)
    return(
        <>
        <ItemDetail item={Items}/>
        <ItemCount/>
        </>
        
    )

}
export default  ItemDetailContainer 
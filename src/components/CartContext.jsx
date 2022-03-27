import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext([]);


const CartContextProvider = ({children}) => {
    const [cartList , setcarList] = useState([]);

    //Funcion global para agregar al carrito un nuevo item
    const addToCart=(item, QtToAdd)=>{
        if(cartList.length>=1){
                
                let found=cartList.find(ele=>(ele.id==item.id))
                if(found){
                    found.qty=QtToAdd+found.qty
                }else{
                        
                        setcarList([...cartList,{
                            id:item.id,
                            name:item.name,
                            image:item.url,
                            price:item.cost,
                            qty: QtToAdd,
                
                        }])
                
                        }
                
            } 
            else{
                setcarList([
                    {
                    id:item.id,
                    name:item.name,
                    image:item.url,
                    price:item.cost,
                    qty: QtToAdd,
        
                }])
                
            }
        }
        //Funcion global para obtener cantidad total de items seleccionados por el comprador
    const getTotalQuantity = () => {
        let qtys = 0

        for (const item of cartList) {
            qtys += item.qty
        }

        return qtys
    }   
        //Funcion global para obtener el valor total de la posible compra
    const getTotalPrice = () => {
        let price = 0
        if (cartList.length > 0) {
            for (const item of cartList) {
                price += item.price * item.qty
            }
        }
        return price
    }
    //Funcion global para quitar un item del carrito
    const deleteProduct = (id)=>{
        setcarList(cartList.filter((e) => e.id != parseInt(id)))
           
    }
    //Funcion global para quitar todos lo items del carrito
    const deleteAllProduct = ()=>{
        setcarList([])
    }

    return(<CartContext.Provider value={{cartList, addToCart,deleteProduct,deleteAllProduct,getTotalQuantity,getTotalPrice }}>{children}</CartContext.Provider>);
	
};
export default CartContextProvider;

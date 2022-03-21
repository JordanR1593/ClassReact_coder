import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
    const [cartList , setcarList] = useState([]);

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

    const getTotalQuantity = () => {
        let qtys = 0

        for (const item of cartList) {
            qtys += item.qty
        }

        return qtys
    }   
    
    const getTotalPrice = () => {
        let price = 0
        if (cartList.length > 0) {
            for (const item of cartList) {
                price += item.price * item.qty
            }
        }
        return price
    }

    const deleteProduct = (id)=>{
        setcarList(cartList.filter((e) => e.id != parseInt(id)))
           
    }
    const deleteAllProduct = ()=>{
        setcarList([])
    }

    return(<CartContext.Provider value={{cartList, addToCart,deleteProduct,deleteAllProduct,getTotalQuantity,getTotalPrice }}>{children}</CartContext.Provider>);
	
};
export default CartContextProvider;

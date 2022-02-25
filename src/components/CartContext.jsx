import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
    const [cartList , setcarList] = useState([]);

    const addToCart=(item, QtToAdd)=>{
        setcarList([...cartList,
            {
            id:item.id,
            name:item.name,
            image:item.url,
            price:item.cost,
            qty: QtToAdd,

        }])
    }

    const deleteProduct = (id,array)=>{
        array.filter((e) => e.Id ==! parseInt(id))
    }


    return(<CartContext.Provider value={{cartList, addToCart,deleteProduct}}>{children}</CartContext.Provider>);
	
};
export default CartContextProvider;

import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
    const [cartList , setcarList] = useState([]);
console.log(cartList)
    const addToCart=(item, QtToAdd)=>{
        if(cartList.length==1){{console.log(cartList)}
                ///////////////////////
                cartList.map(ele=>{
                    console.log(ele.id)
                    console.log(item.id)
                    const newdataRepeat={}
                    if(ele.id==item.id){
                        
                    (item.qty = 1 + ele.qty)
                    newdataRepeat=
                        {
                        id:item.id,
                        name:item.name,
                        image:item.url,
                        price:item.cost,
                        qty: item.qty,
            
                    }
                    }else{
                        const arrayviejo = [];
                        arrayviejo.push(ele)
                        setcarList([arrayviejo,newdataRepeat,
                            {
                            id:item.id,
                            name:item.name,
                            image:item.url,
                            price:item.cost,
                            qty: QtToAdd,
                
                        }])
                    }
                })
               ///////////////////// 
            } 
            else{console.log("chao")
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

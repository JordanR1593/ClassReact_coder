import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from './CartContext';
import { useContext } from 'react';


const  CartWidget= ()=>   {
   
  const test = useContext(CartContext);

    return (
      <div className="CartWidget">
          <Badge color="secondary" badgeContent={test.getTotalQuantity()}>
            <ShoppingCartIcon />
          </Badge>
        </div>
    )
}
export default CartWidget
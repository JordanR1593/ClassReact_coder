import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


export default function CartWidget() {
   
    
    return (
      <div className="CartWidget">
          <Badge color="secondary" badgeContent={3}>
            <ShoppingCartIcon />
          </Badge>
        </div>
    )
}
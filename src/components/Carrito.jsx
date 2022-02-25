import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail,  ProductPrice } from './styledComponents';


const Carrito=()=>{
    const test = useContext(CartContext);
    return(
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            {test.cartList.map(ele=>(
                
                    <ContentCart>
                    <Product>
                    <ProductDetail>
                        <ImageCart src={ele.image} />
                        <Details>
                        <span>
                            <b>Product:</b> {ele.name}
                        </span>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        
                    {ele.qty} items
                        
                        <ProductPrice>${ele.price} each</ProductPrice>
                    </PriceDetail>
                    </Product>
                    <button type="button" className="btn btn-outline-danger" onClick={()=>{test.deleteProduct(ele.id,ele)}}>Borrar</button>
            </ContentCart>)
            
                
            )}
            
        </WrapperCart>
    )
    
}

export default Carrito
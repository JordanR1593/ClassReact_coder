import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail,  ProductPrice } from './styledComponents';
import { Link } from 'react-router-dom';

const Carrito=()=>{
    const test = useContext(CartContext);
    
    
    return(
        <WrapperCart>
            <TitleCart>YOUR CAR</TitleCart>
            <div className='btn-nav-car'>

            
            {test.cartList.length!=0 && <><button className="btn btn-danger" onClick={test.deleteAllProduct}>Borrar todo del carrito</button> <>{test.getTotalQuantity()}</></>}
                       
            

               
            {console.log(test.cartList.length) }   
                
                <Link to={"/"} ><button className="btn btn-success" >Continuar comprando</button></Link>
            </div>
            
            <ContentCart>
                
            {test.cartList.map(ele=>(
                
                    
                    <Product>
                        <div><ProductDetail>
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
                    </PriceDetail></div>
                    
                    <button type="button" className="btn btn-outline-danger" onClick={()=>{test.deleteProduct(ele.id)}}>Borrar</button>
                    </Product>
                    
            
            )
                
            )}
            </ContentCart>
        </WrapperCart>
    )
    
}

export default Carrito
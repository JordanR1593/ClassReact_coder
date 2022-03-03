import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail,  ProductPrice, ContainerCar,ContainerSumary } from './styledComponents';
import { Link } from 'react-router-dom';

const Carrito=()=>{
    const test = useContext(CartContext);
    
    
    return(
        <WrapperCart>
            <TitleCart>YOUR CAR</TitleCart>
            <div className='btn-nav-car'>

            {test.cartList.length==0 && <>Tu carrito esta vacio <Link to={"/"} ><button className="btn btn-success" >Comenzar compra</button></Link></>}
            {test.cartList.length!=0 && <><button className="btn btn-danger" onClick={test.deleteAllProduct}>Borrar todo del carrito</button> <>{test.getTotalQuantity()}</><Link to={"/"} ><button className="btn btn-success" >Continuar comprando</button></Link></>}
            
            </div>
            <ContainerCar>
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
                        
                    {ele.qty} item(s) / ${ele.price} each
                        
                        <ProductPrice>${ele.price*ele.qty}</ProductPrice>
                    </PriceDetail></div>
                    
                    <button type="button" className="btn btn-outline-danger" onClick={()=>{test.deleteProduct(ele.id)}}>Borrar</button>
                    </Product>
                    
            
            )
                
            )}
            
            </ContentCart>
            
            {test.cartList.length>0 && <ContainerSumary><div><strong>ORDER SUMARY</strong>
                <div>Subtotal:$ {test.getTotalPrice()}</div>
                <div>Total:$ {test.getTotalPrice()}</div>
            </div></ContainerSumary>}
            
            </ContainerCar>
        </WrapperCart>
    )
    
}

export default Carrito
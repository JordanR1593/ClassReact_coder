import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "./CartContext";

const ItemCheck=()=>{
	return (
        <div className="Cuenta">
            
            <Link to={"/carShop"} ><button type="button" className="btn btn-outline-danger" >Check</button></Link>
            
        </div>
        );
}
//Componente para definir que se va a mostrar de detalle para cada producto una vez ha sido seleccionado
const ItemDetail = ({item}) => {
	const [QtToAdd, setQtToAdd] = useState(0); 
	const test = useContext(CartContext)
	
	const onAddNow=(Propi)=>{
		alert("Se han agregado al carrito " + Propi+ " unds")
		setQtToAdd(Propi)
		test.addToCart(item,Propi)
	}
	
	return (
		<>
			
			<div className="card">
				<img
					className="card-img-top"
					key={item.id}
					src={item.url}
					alt={item.name}
				/>
				<div className="card-body">
					<h3 className="card-text"> {item.name}</h3>
					<p className="card-text">$ {item.cost}</p>
					<p className="card-text"> stock: {item.stock} und</p>
					<p className="card-text">{item.description}</p>
				</div>
			</div>
			{
				
				QtToAdd ==0? 

				<ItemCount  stock={item.stock}onAdd={onAddNow}/>
				:<ItemCheck/>
				
			}
			
		</>
		
	);
	
};

export default ItemDetail;

import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from 'react-router-dom';
const ItemCheck=()=>{
	return (
        <div className="Cuenta">
            
            <Link to={"/Carrito"} ><button type="button" className="btn btn-outline-danger" >Check</button></Link>
            
        </div>
        );
}

const ItemDetail = (props) => {
	const [QtToAdd, setQtToAdd] = useState(0); 
	const onAdd1=(Propi)=>{
		alert("Se han agregado al carrito " + Propi+ " unds")
		setQtToAdd(Propi)
		
	}
	console.log(QtToAdd)
	return (
		<>
			{console.log(props.item)}
			<div className="card">
				<img
					className="card-img-top"
					key={props.item.id}
					src={props.item.url}
					alt={props.item.name}
				/>
				<div className="card-body">
					<h3 className="card-text"> {props.item.name}</h3>
					<p className="card-text">$ {props.item.cost}</p>
					<p className="card-text">{props.item.description}</p>
				</div>
			</div>
			{
				
				QtToAdd ==0? 

				<ItemCount  onAdd={onAdd1}/>
				:<ItemCheck/>
				
			}
			
		</>
		
	);
	
};

export default ItemDetail;

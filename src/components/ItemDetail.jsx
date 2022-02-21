const ItemDetail = (props) => {
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
		</>
	);
};
export default ItemDetail;

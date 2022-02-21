import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "./Item";
import ItemList from "./ItemList";

const { relojs } = require("./Item");

const ItemListContainer = () => {
	const [Items, setItems] = useState([]);
	const { idCategory } = useParams();
	console.log(idCategory);

	function getItems() {
		Item(
			500,
			relojs.filter((e) => e.categoryId === parseInt(idCategory))
		)
			.then((dato) => setItems(dato))
			.catch((error) => console.log(error));
	}
	function getAllItems() {
		Item(500, relojs)
			.then((dato) => setItems(dato))
			.catch((error) => console.log(error));
	}

	useEffect(() => {
		setTimeout(() => {
			if (idCategory === undefined) {
				getAllItems();
			} else {
				getItems();
			}
		}, 0);
	}, [idCategory]);
	console.log(Items);

	return (
		<>
			<div className="carta">
				<ItemList item={Items} />
			</div>
		</>
	);
};

export default ItemListContainer;

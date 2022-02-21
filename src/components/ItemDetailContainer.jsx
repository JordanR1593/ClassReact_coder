import { useEffect, useState } from "react";
import { Item } from "./Item";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
const { relojs } = require("./Item");


console.log(relojs);
const ItemDetailContainer = () => {
	const [Items, setItems] = useState({});
	const {idName} = useParams();

	function getItem() {
		Item(2000, relojs[idName-1])
			.then((data) => setItems(data))
			.catch((error) => console.log(error));
	}
	useEffect(() => {
		getItem();
	}, []);
	console.log(Items);
	return (
		<>
			<ItemDetail item={Items} />
			<ItemCount />
		</>
	);
};
export default ItemDetailContainer;

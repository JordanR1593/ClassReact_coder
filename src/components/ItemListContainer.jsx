import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* import { Item } from "./Item"; */
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig";

/* const { relojs } = require("./Item"); */

const ItemListContainer = () => {
	const [Items, setItems] = useState([]);
	const { idCategory } = useParams();
	console.log(idCategory);
	let array;
	const firestoreFetch = async () => {
		const querySnapshot = await getDocs(collection(db, "item"));

		return (array = querySnapshot.docs.map((document) => ({
			id: document.id,
			...document.data(),
		})));
	};
	
	console.log(array);

	function getItems() {
		console.log("pocos");
		firestoreFetch()
			.then((dato) =>
				setItems(dato.filter((e) => e.categoryId === parseInt(idCategory)))
			)
			.catch((error) => console.log(error));
	}
	function getAllItems() {
		console.log("todo");
		firestoreFetch()
			.then((dato) => setItems(dato))
			.catch((error) => console.log(error));
	}

	/* function getItems() {
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
	} */

	useEffect(() => {
		if (idCategory === undefined) {
			getAllItems();
			console.log("sin filter");
		} else {
			getItems();
			console.log("con filter");
		}
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

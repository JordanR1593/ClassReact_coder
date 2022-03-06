import { useEffect, useState } from "react";
import { Item } from "./Item";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig";

let array
const ItemDetailContainer = () => {
	const [Items, setItems] = useState({});
	const {idName} = useParams();
	const firestoreFetch = async () => {
		const querySnapshot = await getDocs(collection(db, "item"));

		return (array = querySnapshot.docs.map((document) => ({
			id: document.id,
			...document.data(),
		})));
	};
	function getItem() {
		
		firestoreFetch( )
			.then((data) => setItems(data[idName-1]))
			.catch((error) => console.log(error));
	}
	useEffect(() => {
		getItem();
	}, []);
	console.log(Items);
	return (
		<>
			<ItemDetail item={Items} />
			
		</>
	);
};
export default ItemDetailContainer;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import db from "../utils/firebaseConfig";



const ItemListContainer = () => {
	const [Items, setItems] = useState([]);
	const { idCategory } = useParams();
	
	let array;
	const firestoreFetch = async () => {
		const querySnapshot = await getDocs(collection(db, "item"));

		return (array = querySnapshot.docs.map((document) => ({
			id: document.id,
			...document.data(),
		})));
	};
	
	

	function getItems() {
		
		firestoreFetch()
			.then((dato) =>
				setItems(dato.filter((e) => e.categoryId === parseInt(idCategory)))
			)
			.catch((error) => console.log(error));
	}
	function getAllItems() {
		
		firestoreFetch()
			.then((dato) => setItems(dato))
			.catch((error) => console.log(error));
	}

	

	useEffect(() => {
		if (idCategory === undefined) {
			getAllItems();
			
		} else {
			getItems();
			
		}
	}, [idCategory]);
	

	return (
		<>
			<div className="carta">
				<ItemList item={Items} />
			</div>
		</>
	);
};

export default ItemListContainer;

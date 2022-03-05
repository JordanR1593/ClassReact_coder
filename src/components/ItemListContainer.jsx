import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* import { Item } from "./Item"; */
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig"

/* const { relojs } = require("./Item"); */

const ItemListContainer = () => {
	const [Items, setItems] = useState([]);
	const { idCategory } = useParams();
	console.log(idCategory);
	let array=[]
 const firestoreFetch = async ()=>{
	 const querySnapshot = await getDocs(collection(db,"item"));
	 
	  return array=(querySnapshot.docs.map(document => ({
		 idI: document.id,
		 ...document.data()

		 
	 })))
	 
 }
 /* console.log(Items.map(element=>{
	 return (element.doc.data.value.mapValue.fields)
 })) */
 console.log(array)

 function getItems() {
	/* firestoreFetch(
		
		array.docs.filter((e) => e.categoryId === parseInt(idCategory))
	)
		.then((dato) => setItems(dato))
		.catch((error) => console.log(error)); */
		firestoreFetch.filter((e) => e.categoryId === parseInt(idCategory))
		.then((dato) => setItems(dato))
		.catch((error) => console.log(error));
		
}
function getAllItems() {
	firestoreFetch( )
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

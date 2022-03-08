import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import db from "../firebaseConfig";



const ItemDetailContainer = () => {
	const [Items, setItems] = useState({});
	const {idName} = useParams();
	
	const firestoreFetch= async(iditem)=>{
		const docRef = doc(db, "item", iditem);
		const docSnap = await getDoc(docRef);
	
		if (docSnap.exists()) {
		return{
			id:iditem,
			...docSnap.data()
		}
		} else {
	  
	  		console.log("No such document!");
	}
	}
	


	function getItem() {
		
		firestoreFetch(idName )
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
			
		</>
	);
};
export default ItemDetailContainer;

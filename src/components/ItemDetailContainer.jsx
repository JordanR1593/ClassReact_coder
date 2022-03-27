import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import db from "../utils/firebaseConfig";


//Componente que identifica que producto el cliente desea comprar y que detalle especifico debe renderizar
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
	
	return (
		<>
			<ItemDetail item={Items} />
			
		</>
	);
};
export default ItemDetailContainer;

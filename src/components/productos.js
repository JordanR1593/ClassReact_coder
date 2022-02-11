import {useEffect, useState} from 'react'


const Productos= ()=>{
    const [items, setItems] = useState([]); 
    
    const relojs = [
        {
            id:1,
            name: "reloj1",
            url: "https://ripleycl.imgix.net/https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F513AraXHHpL.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=7027dc2773e8bfc09a01201167e1620b",
            cost: 100
        },
        {
            id:2,
            name: "reloj2",
            url: "./imgs/reloj2.jpg",
            cost: 200
        },
        {
            id:3,
            name: "reloj3",
            url: "./imgs/reloj3",
            cost: 80
        },
        {
            id:4,
            name: "reloj4",
            url: "./imgs/reloj4",
            cost: 50
        },
        {
            id:5,
            name: "reloj5",
            url: "./imgs/reloj5",
            cost: 200
        },
        {
            id:6,
            name: "reloj6",
            url: "./imgs/reloj6",
            cost: 300
        },
        {
            id:7,
            name: "reloj7",
            url: "./imgs/reloj7",
            cost: 100
        },
    ]
    let is_ok=true
    const ObtenerDatos = (data)=>{
        return new Promise ((resolve,reject)=>{
            
            
                if(is_ok){
                    resolve(data)
                    
                }else{
                    reject("upss..")
                }
        
            
        })
    }
    function getItems(){
        ObtenerDatos(relojs)
        /* .then((data)=>console.log(data)) */
        .then((data)=>setItems(data))
        .catch((error)=>alert(error))
    }
   
    useEffect(()=>{
        setTimeout(() => {
            getItems()
        }, 0);
    },[]) 
    

    console.log(items)
    return(
    items.map(elem=>{
            return(
                
                <div className="card" >
                <img className="card-img-top" src={elem.url} alt={elem.name}/>
                <div className="card-body">
                    
                    <p className="card-text">{elem.cost}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            
            )
            
            
        
            }
    
        
    
    )     
    )  
}     


    

export default Productos


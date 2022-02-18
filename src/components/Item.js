import { Description } from "@material-ui/icons";
import { LoremIpsum } from "react-lorem-ipsum";


const relojs = [
    {
        id:1,
        name: "reloj pulso 1",
        url: "https://ripleycl.imgix.net/https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F513AraXHHpL.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=7027dc2773e8bfc09a01201167e1620b",
        cost: 100,
        categoryId:2,
        description: <LoremIpsum
        avgWordsPerSentence={2}
        />
    },
    {
        id:2,
        name: "reloj pulso 2",
        url: "https://http2.mlstatic.com/D_NQ_NP_833233-CBT46108347096_052021-O.webp",
        cost: 200,
        categoryId:2,
        description: <LoremIpsum
        avgWordsPerSentence={2}
        />
    },
    {
        id:3,
        name: "reloj despertador",
        url: "https://http2.mlstatic.com/D_NQ_NP_805791-MCO46902216452_072021-O.webp",
        cost: 80,
        categoryId:3,
        description: <LoremIpsum
        avgWordsPerSentence={2}
        />
    },
    {
        id:4,
        name: "reloj pulso 4",
        url: "https://http2.mlstatic.com/D_NQ_NP_722388-MCO44278550466_122020-O.webp",
        cost: 50,
        categoryId:2,
        description: <LoremIpsum
        avgWordsPerSentence={2}
        />
    },
    {
        id:5,
        name: "relojpulso 5",
        url: "https://http2.mlstatic.com/D_NQ_NP_701701-MCO46779205924_072021-O.webp",
        cost: 200,
        categoryId:2,
        description: <LoremIpsum
        avgWordsPerSentence={2}
        />
    },
    {
        id:6,
        name: "reloj pared 1",
        url: "https://http2.mlstatic.com/D_NQ_NP_2X_957831-MCO41557847792_042020-F.webp",
        cost: 300,
        categoryId:1,
        description: <LoremIpsum
        avgWordsPerSentence={2}
        />
    },
    {
        id:7,
        name: "reloj pared 2",
        url: "https://www.mueblesarteco.com.co/wp-content/uploads/2016/04/Reloj-decorativo-Muebles-Arteco.png",
        cost: 100,
        categoryId:1,
        description: <LoremIpsum
        avgWordsPerSentence={2}
        />
    },
]
const Item = (timeout, data)=>{
        return new Promise ((resolve,reject)=>{
            let is_ok=true
                setTimeout(() => {
                    if(is_ok){
                        resolve(data)
                        
                    }else{
                        reject("upss..")
                    }
                }, timeout);
                
        
            
        })
    }
    
    


export  {Item, relojs}
import { Description } from "@material-ui/icons";
import { LoremIpsum } from "react-lorem-ipsum";


const relojs = [
    {
        id:1,
        name: "reloj1",
        url: "https://ripleycl.imgix.net/https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F513AraXHHpL.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=7027dc2773e8bfc09a01201167e1620b",
        cost: 100,
        description: <LoremIpsum
        avgWordsPerSentence={2}
        />
    },
    {
        id:2,
        name: "reloj2",
        url: "https://http2.mlstatic.com/D_NQ_NP_833233-CBT46108347096_052021-O.webp",
        cost: 200,
        description: <LoremIpsum
        avgWordsPerSentence={2}
        />
    },
    {
        id:3,
        name: "reloj3",
        url: "https://http2.mlstatic.com/D_NQ_NP_692949-MCO43441754307_092020-O.webp",
        cost: 80,
        description: <LoremIpsum
        avgWordsPerSentence={2}
        />
    },
    {
        id:4,
        name: "reloj4",
        url: "https://http2.mlstatic.com/D_NQ_NP_722388-MCO44278550466_122020-O.webp",
        cost: 50,
        description: <LoremIpsum
        avgWordsPerSentence={2}
        />
    },
    {
        id:5,
        name: "reloj5",
        url: "https://http2.mlstatic.com/D_NQ_NP_701701-MCO46779205924_072021-O.webp",
        cost: 200,
        description: <LoremIpsum
        avgWordsPerSentence={2}
        />
    },
    {
        id:6,
        name: "reloj6",
        url: "https://http2.mlstatic.com/D_NQ_NP_922430-MCO48673630260_122021-O.webp",
        cost: 300,
        description: <LoremIpsum
        avgWordsPerSentence={2}
        />
    },
    {
        id:7,
        name: "reloj7",
        url: "https://http2.mlstatic.com/D_NQ_NP_927780-MCO43233115420_082020-O.webp",
        cost: 100,
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
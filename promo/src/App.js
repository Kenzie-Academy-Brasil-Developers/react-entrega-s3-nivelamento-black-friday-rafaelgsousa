import './App.css';
import {useState} from "react"
import BotaoPromo from './Components/BotaoPromo';
import Card from './Components/Card';
import ProductsList from './Components/ProductsList';
import CurrentSale from './Components/CurrentSale';

function App() {

  const [useProduct, setProduct] = useState([
    { id: 1, name: 'Smart TV LED 50', price: 1999.00 },
    { id: 2, name: 'PlayStation 5', price: 12000.00 },
    { id: 3, name: 'Notebook Acer Nitro 5', price: 5109.72 },
    { id: 4, name: 'Headset s fio Logitech G935', price: 1359.00 },
    { id: 5, name: 'Tablet Samsung Galaxy Tab S7', price: 4844.05 },
    { id: 6, name: 'Cadeira Gamer Cruiser Preta FORTREK', price: 1215.16 },
    ]);

  const [currentSale,setCurrentSale]=useState([])

  const handleClick=(productId)=>{
      setCurrentSale([useProduct.find((e)=>e.id===productId),...currentSale])
  }

  const [promo,setPromo]=useState(null)
  
  return (
    <div className="App">
      {console.log(promo)}
      <BotaoPromo useProduct={useProduct} setPromo={setPromo}/>
      {!promo?null:<Card promo={promo} cart={handleClick}/>}
      <ProductsList useProduct={useProduct} cart={handleClick}/> 
      <CurrentSale product={currentSale}/>     
    </div>
  );
}

export default App;

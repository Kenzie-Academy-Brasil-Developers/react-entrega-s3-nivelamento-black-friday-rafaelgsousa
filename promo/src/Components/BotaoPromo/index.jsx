import { useState } from "react";
import "./style.css"

function BotaoPromo({useProduct,setPromo}){

    const [use,setUse]=useState(false)

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomFloatInclusive(min, max) {
        return (Math.random() * (max - min + 1)) + min;
    }

    const Produ=()=>{
        const id = getRandomIntInclusive(1, 6)
        const desc = getRandomFloatInclusive(40, 90)
        const produtosorteado = useProduct.filter((e)=>e.id===id)[0]
        produtosorteado.discount = (desc).toFixed(2)
        produtosorteado.oldprice = produtosorteado.price
        produtosorteado.price = (produtosorteado.oldprice*(1-desc/100)).toFixed(2)
        setUse(true)
        setPromo([produtosorteado])
    }

    return(<button onClick={!use && Produ} className="gerarpromocao">GERAR PROMOÇÂO</button>)
}
export default BotaoPromo;
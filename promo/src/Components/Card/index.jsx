import "./style.css"

function Card({promo,cart}){
    return (
    <ul className="sorte">
        {promo.map((e,i)=><li key={i} className="sorteitem">
            <h3>{e.name}</h3>
            <p>Preço original: R$ {(e.price).toFixed(2)}</p>
            <p>Porcentagem de desconto: {e.discount} %</p>
            <p>Valor do desconto: R${(e.price-e.newvalue).toFixed(2)}</p>
            <p>Preço a ser pago: R$ {e.newvalue}</p>
            <button onClick={()=>cart(e.id)}>Add ao Carrinho</button>
        </li>)}
    </ul>
    )
}

export default Card
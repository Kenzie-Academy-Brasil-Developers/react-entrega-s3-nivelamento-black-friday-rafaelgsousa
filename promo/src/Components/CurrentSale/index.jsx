import "./style.css"

function CurrentSale({product}){
    return (
        <div className="carro">
            <h2>Carrinho</h2>
            <p>Total: R$ {(product.reduce((a,e)=>a+e.price,0)).toFixed(2)}</p>
            <ul className="lista">
                {product.map((e,i)=><li key={i} className="item">
                    <h4>Nome do Produto: {e.name}</h4>
                    <p>Preço original: {(e.price).toFixed(2)}</p>
                </li>)}
            </ul>
        </div>
    )
}
export default CurrentSale
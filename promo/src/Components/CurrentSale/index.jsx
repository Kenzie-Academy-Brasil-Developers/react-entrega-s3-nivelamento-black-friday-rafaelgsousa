import "./style.css"

function CurrentSale({product}){
    return (
        <div className="carro">
            <h2>Carrinho</h2>
            <p>Total: R$ {Math.round(product.reduce((a,e)=>a+Number(e.price),0)*100)/100}</p>
            <ul className="lista">
                {product.map((e,i)=><li key={i} className="item">
                    <h4>Nome do Produto: {e.name}</h4>
                    <p>Preço: {e.price}</p>
                </li>)}
            </ul>
        </div>
    )
}
export default CurrentSale
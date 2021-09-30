import "./style.css"
function ProductsList({useProduct,cart}){
    return(<ul className="produtos">
        {useProduct.map((e,i)=><li key={i}>
            <h4>Nome do Produto: {e.name}</h4>
            <p>Preço original: {(e.price).toFixed(2)}</p>
            <button onClick={()=>cart(e.id)}>Add ao Carrinho</button>
        </li>)}
    </ul>)
}

export default ProductsList
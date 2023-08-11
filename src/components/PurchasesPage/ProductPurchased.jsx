import './styles/ProductPurchased.css'

const ProductPurchased = ({ purchase }) => {
  return (
    <article className="purchase__container">
      <header className="purchase__header">
        <img className="purchase__img" src={purchase.product.images[0].url} alt="" />
      </header>
      <section className="purchase__body">
        <header className='purchase__body__header'>
          <h3 className="purchase__name">{purchase.product.title}</h3>
          <div className="purchase__qty">{purchase.quantity}</div>
        </header>
        <div className="purchase__value">{purchase.quantity * purchase.product.price}</div>
      </section>
    </article>
  )
}

export default ProductPurchased
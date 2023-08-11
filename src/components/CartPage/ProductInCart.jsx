import useCartApi from "../../hooks/useCartApi"
import './styles/ProductInCart.css'

const ProductInCart = ({ prodCart }) => {

  const { deleteProductInCart } = useCartApi()

  const handleDeleteCart = () => {
    deleteProductInCart(prodCart.id)
  }

  return (
    <article className="cart">
      <header className="cart__header">
        <img className="cart__img" src={prodCart.product.images[0].url} alt="" />
      </header>
      <section className="cart__body">
        <header className="cart__body__header">
          <h3 className="cart__name">{prodCart.product.title}</h3>
          <span className="cart__qty">{prodCart.quantity}</span>
        </header>
        <button className="cart__btn" onClick={handleDeleteCart}>
          <i className='bx bx-trash'></i>
        </button>
      </section>
      <footer className="cart__footer">
        <span className="cart__footer__label">subtotal: </span>
        <span className="cart__footer__value">{prodCart.product.price * prodCart.quantity}</span>
      </footer>
    </article>
  )
}

export default ProductInCart
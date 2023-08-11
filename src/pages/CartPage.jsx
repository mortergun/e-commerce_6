import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../store/slices/cart.slice"
import { useEffect } from "react"
import ProductInCart from "../components/CartPage/ProductInCart"
import usePurchases from "../hooks/usePurchases"
import './styles/CartPage.css'

const CartPage = () => {

  const cart = useSelector(reducer => reducer.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  const totalAmount = cart.reduce((acc, cv) => {
    const subtotal = cv.quantity * cv.product.price 
    return acc + subtotal
  }, 0)

  const { makeAPurchase } = usePurchases()

  const handlePurchase = () => {
    makeAPurchase()
  }

  return (
    <section className="cart-container">
      <h2 className="cart__title">Cart</h2>
      <div className="cart__item">
        {
          cart.map(prod => (
            <ProductInCart 
              key={prod.id}
              prodCart={prod}
            />
          ))
        }
      </div>
      <footer className="cart__footer">
        <span className="cart__footer-span">Total</span>
        <h3 className="cart__footer-price">{totalAmount}</h3>
        <button className="cart__footer-btn" onClick={handlePurchase}>Checkout</button>
      </footer>
    </section>
  )
}

export default CartPage
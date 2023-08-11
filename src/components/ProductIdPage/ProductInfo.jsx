import { useState } from "react";
import useCartApi from "../../hooks/useCartApi";
import './styles/ProductInfo.css'

const ProductInfo = ({ product }) => {

  const [counter, setCounter] = useState(1);

  const handleMinus = () => {
    if(counter - 1 >= 1) {
      setCounter(counter - 1);
    }
  };

  const handlePlus = () => setCounter(counter + 1);

  const { addProductInCart } = useCartApi();

  const handleAddCart = () => {
    const data = {
      quantity: counter,
      productId: product.id
    }
    addProductInCart(data)
  };

  return (
    <article className="info__container">
      <div className="info__title-container">
        <h4 className="info__brand">{product?.brand}</h4>
        <h3 className="info__title">{product?.title}</h3>
      </div>
      <div className="info__description-container">
        <p className="info__description">{product?.description}</p>
      </div>
      <section className="info__price">
        <h4 className="info__text">Price</h4>
        <span className="info__text-price">{product?.price}</span>
      </section>
      <section className="info__qty">
        <h4 className="info__text">Quantity</h4>
        <div className="info__counter">
          <button className="info__btn-plus" onClick={handleMinus}>-</button>
          <span className="info__counter-text">{ counter }</span>
          <button className="info__btn-minus" onClick={handlePlus}>+</button>
        </div>
      </section>
      <footer className="info__footer">
        <button className="info__footer-btn" onClick={handleAddCart}>Add to Cart <i className='bx bxs-cart-add' ></i></button>
      </footer>
    </article>
  )
}

export default ProductInfo
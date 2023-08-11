import { useEffect } from "react"
import usePurchases from "../hooks/usePurchases"
import ProductPurchased from "../components/PurchasesPage/ProductPurchased"
import './styles/PurchasesPage.css'

const PurchasesPage = () => {

  const { getAllPurchases, purchases } = usePurchases()

  useEffect(() => {
    getAllPurchases()
  }, [])

  return (
    <section className="purchases">
      <h2 className="purchases__title-text">My purchases</h2>
      <div className="purchases__cards">
        {
          purchases?.map(purch => (
            <ProductPurchased 
              key={purch.id}
              purchase={purch}
            />
          ))
        }
      </div>
    </section>
  )
}

export default PurchasesPage
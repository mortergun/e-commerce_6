import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductIdPage/ProductInfo"
import SimilarProducts from "../components/ProductIdPage/SimilarProducts"
import SliderImgs from "../components/ProductIdPage/SliderImgs"
import './styles/ProductIdPage.css'

const ProductIdPage = () => {

  const { id } = useParams()

  const [ product, getSingleProduct ] = useFetch()

  useEffect(() => {
    getSingleProduct(`/products/${id}`)
  }, [id])

  return (
    <div className="page__container">
      <SliderImgs 
        product={product}
      />
      <ProductInfo 
        product={product}
      />
      <SimilarProducts 
        product={product}
      />
    </div>
  )
}

export default ProductIdPage
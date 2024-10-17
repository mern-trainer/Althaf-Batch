import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const SingleView = () => {

    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://dummyjson.com/products/${id}`)
            const result = await response.json()
            setProduct(result)
        }
        getProduct()
    }, [id])

    return (
        <div>
            {product?.title}
            {/* optional chaining */}
        </div>
    )
}

export default SingleView

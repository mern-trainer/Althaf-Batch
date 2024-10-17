import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const SingleView = () => {

    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [currentImage, setCurrentImage] = useState("")

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://dummyjson.com/products/${id}`)
            const result = await response.json()
            setCurrentImage(result.images[0])
            setProduct(result)
        }
        getProduct()
    }, [id])

    return (
        <div>
            {/* {product?.title} */}
            {/* optional chaining */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1 flex flex-column">
                        {
                            product?.images.map(image => {
                                return <img src={image} onMouseEnter={() => setCurrentImage(image)} alt="images" width={100} height={100}/>
                            })
                        }
                    </div>
                    <div className="col-5">
                        <img src={currentImage} alt="" width={500} height={500}/>
                    </div>
                    <div className="col-6">
                        {product?.title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleView

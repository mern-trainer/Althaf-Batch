import { Fragment, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const UseEffect = () => {

    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(-1)

    // side effect

    useEffect(() => {
        const getProducts = async () => {
            try {
                const limit = 25
                const skip = ( currentPage - 1 ) * limit  // => 2 * 25 = 50 
                const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
                const result = await response.json()
                setProducts(result.products)
                if (totalPages == -1) {
                    const pages = Math.ceil(result.total / limit)
                    setTotalPages(pages)
                    // Math.ceil(5.001) => 6
                    // 101/5 => 5.2 => 6
                }
            } catch (error) {
                return toast.error("Error happend!")
            }
        }
        getProducts()
    }, [currentPage])

    return (
        <Fragment>
            <div className='d-flex flex-wrap gap-2 justify-content-center'>
                {
                    products.map(item => {
                        // console.log(item)
                        return <div key={item.id} style={{width: "15rem", background: "gray"}} className='p-2'>
                            <div>
                                <img src={item.images[0]} alt="sample" style={{width: "15rem", aspectRatio: 1/1, objectFit: "contain"}}/>
                            </div>
                            <div className='text-center'>
                                <h5>{item.title}</h5>
                                <div className='d-flex justify-content-between'>
                                    <div>{item.rating}</div>
                                    <div>${item.price}</div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className='d-flex justify-content-center gap-3 mt-4 mb-3'>
                {
                    totalPages > -1 && new Array(totalPages).fill(0).map((_, index) => index + 1).map(item => {
                        return <button onClick={() => setCurrentPage(item)} key={item} className='rounded-circle bg-success' style={{width: "40px", height: "40px"}}>{item}</button>
                    })
                }
            </div>
        </Fragment>
    )
}

export default UseEffect

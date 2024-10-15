import { Fragment, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { BiSearch } from 'react-icons/bi'
import { CgShoppingCart } from 'react-icons/cg'

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
            <div className='pt-2'>
                <div className='d-flex flex-wrap gap-2 justify-content-center mt-5 pt-3'>
                    {
                        products.map(item => {
                            // console.log(item)
                            return <div key={item.id} style={{width: "15rem"}} className='p-2 bg-light card-hover'>
                                <div>
                                    <img src={item.images[0]} alt="sample" style={{width: "15rem", aspectRatio: 1/1, objectFit: "contain"}}/>
                                </div>
                                <div className='text-center'>
                                    <h5 className='text-truncate'>{item.title}</h5>
                                    <div className='d-flex justify-content-between'>
                                        <div>{item.rating}</div>
                                        <div>${item.price}</div>
                                    </div>
                                    <button className='w-100 mt-2 bg-success text-light p-1 border-0'><CgShoppingCart /> Add To Cart</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='d-flex justify-content-center gap-3 mt-4 mb-3'>
                {
                    totalPages > -1 && new Array(totalPages).fill(0).map((_, index) => index + 1).map(item => {
                        return <button onClick={() => setCurrentPage(item)} key={item} className='rounded-circle bg-success border-0 text-light' style={{width: "40px", height: "40px"}}>{item}</button>
                    })
                }
            </div>
        </Fragment>
    )
}

export default UseEffect

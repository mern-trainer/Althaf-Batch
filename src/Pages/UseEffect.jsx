import axios from 'axios'
import { Fragment, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { CgShoppingCart } from 'react-icons/cg'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const UseEffect = () => {

    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [searchItem, setSearchItem] = useState("")

    // side effect

    useEffect(() => {
        const getProducts = async () => {
            try {
                const limit = 25
                const skip = ( currentPage - 1 ) * limit  // => 2 * 25 = 50 
                const { data: result } = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
                const filteredData = result.products.filter((product) => product.title.toLowerCase().includes(searchItem.toLowerCase()))
                setProducts(filteredData)
                console.log(filteredData.length)
                const pages = Math.ceil(filteredData.length / limit)
                setTotalPages(pages)
            } catch (error) {
                console.log(error.message)
                return toast.error("Error happend!")
            }
        }
        getProducts()
    }, [currentPage, searchItem])

    return (
        <Fragment>
            <div className='pt-2'>
                <div className='d-flex justify-content-center'>
                    <div className='position-relative w-50'>
                        <input type="text" placeholder="Search Product..." onChange={(event) => setSearchItem(event.target.value)} value={searchItem} className='p-2 w-100 border-0' style={{outline: 0}}/>
                        <FaSearch className='position-absolute top-50 end-0 translate-middle'/>
                    </div>
                </div>
                <div className='d-flex flex-wrap gap-2 justify-content-center pt-3'>
                    {
                        products.map(item => {
                            return <div key={item.id} style={{width: "15rem"}} className='p-2 bg-light card-hover'>
                                <div>
                                    <img src={item.images[0]} alt="sample" style={{width: "15rem", aspectRatio: 1/1, objectFit: "contain"}}/>
                                </div>
                                <div className='text-center'>
                                    <h5 className='text-truncate'>
                                        <Link to={`/single-view/${item.id}`}>{item.title}</Link>
                                    </h5>
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
                    new Array(totalPages).fill(0).map((_, index) => index + 1).map(item => {
                        return <button onClick={() => setCurrentPage(item)} key={item} className='rounded-circle bg-success border-0 text-light' style={{width: "40px", height: "40px"}}>{item}</button>
                    })
                }
            </div>
        </Fragment>
    )
}

export default UseEffect

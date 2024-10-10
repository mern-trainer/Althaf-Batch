import React, { Fragment, useContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import { products } from '../Constants/Products'
import ProductList from '../Components/ProductList'
import Modal from '../Components/Modal'
import { CartContext } from '../Providers/CartProvider'
import { useCart } from '../Hooks'
// import { CartContext } from '../App'

const ShopPage = () => {

    const [selectedProduct, setSelectedProduct] = useState(null)
    // const { cartList } = useContext(CartContext)
    const { cartList } = useCart()

    return (
        <Fragment>
            <Navbar />
            <div className="d-flex flex-wrap gap-3">
                {
                    products.map((product) => {
                        return <ProductList
                            product={product}
                            key={product.id}
                            setSelectedProduct={setSelectedProduct}
                        />
                    })
                }
            </div>
            {
                selectedProduct && <Modal
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                />
            }
            <div className='mt-5'>
                <h1>CART</h1>
                <div className="d-flex mt-3 flex-wrap gap-3">
                    {
                        cartList.map((product) => {
                            return <ProductList
                                product={product}
                                key={product.id}
                                cart={true}
                            />
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default ShopPage

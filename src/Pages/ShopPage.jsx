import React, { Fragment, useState } from 'react'
import Navbar from '../Components/Navbar'
import { products } from '../Constants/Products'
import ProductList from '../Components/ProductList'
import Modal from '../Components/Modal'

const ShopPage = () => {

    const [selectedProduct, setSelectedProduct] = useState(null)

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
        </Fragment>
    )
}

export default ShopPage

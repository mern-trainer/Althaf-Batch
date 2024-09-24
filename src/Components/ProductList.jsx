import React from 'react'

const ProductList = ({ product, setSelectedProduct }) => {
    return (
        <div className="p-2" onClick={() => setSelectedProduct(product)} style={{width: "15rem", cursor: "pointer"}}>
            <div>
                <img src={product.images[0]} alt={product.title} style={{width: "15rem", aspectRatio: 1/1, objectFit: "contain"}} />
            </div>
            <div>
                <h6 className="text-center text-truncate">{product.title}</h6>
                <p className="text-truncate">{product.description}</p>
                <div className="d-flex justify-content-between">
                    <div className="text-success">{product.discountPercentage}%</div>
                    <div><s className="text-secondary">${product.price}</s> ${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductList

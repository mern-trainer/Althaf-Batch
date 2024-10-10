import React, { Fragment } from 'react'
// import { CartContext } from '../App'
import { MdShoppingCart } from 'react-icons/md'
import toast from 'react-hot-toast'
import { useCart } from '../Hooks'

const ProductList = ({ product, setSelectedProduct, cart }) => {

    // const { cartList, setCartList } = useContext(CartContext)
    const { cartList, setCartList } = useCart()

    const handleAddToCart = () => {
        const exist = cartList.find((element) => element.id == product.id)
        if (exist) {
            const response = cartList.map((element) => {
                if (element.id == product.id) {
                    return {
                        ...element,
                        qty: element.qty + 1,
                        totalPrice: (element.price - (element.price * element.discountPercentage/100)) * (element.qty + 1)
                    }
                }
                return element
            })
            setCartList(response)
        } else {
            product.qty = 1
            product.totalPrice = product.price - (product.price * (product.discountPercentage/100))
            setCartList([product, ...cartList])
        }
        
        return toast.success("Added to cart")
    }

    const removeProduct = () => {
        const res = cartList.filter(element => element.id != product.id)
        setCartList(res)
        return toast.success("Product removed from cart")
    }

    const handleQtyUpdate = (op) => {
        if (product.qty == 1 && op == "-") {
            return removeProduct()
        }
        const res = cartList.map(element => {
            if (element.id == product.id) {
                return {
                    ...element,
                    qty: op == "+" ? element.qty + 1 : element.qty - 1,
                    totalPrice: (element.price - (element.price * element.discountPercentage/100)) * (op == "+" ? element.qty + 1 : element.qty - 1)
                }
            }
            return element
        })
        setCartList(res)
    }

    return (
        <div className="p-2" style={{width: "15rem", cursor: "pointer"}}>
            <div onClick={() => setSelectedProduct(product)}>
                <img src={product.images[0]} alt={product.title} style={{width: "15rem", aspectRatio: 1/1, objectFit: "contain"}} />
            </div>
            <div>
                <h6 className="text-center text-truncate" onClick={() => setSelectedProduct(product)}>{product.title}</h6>
                <p className="text-truncate">{product.description}</p>
                {
                    !cart && <div className="d-flex justify-content-between">
                        <div className="text-success">{product.discountPercentage}%</div>
                        <div><s className="text-secondary">${product.price}</s> ${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</div>
                    </div>
                }
                {
                    cart && <Fragment>
                        <div>{product.totalPrice.toFixed(2)}</div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <button onClick={() => handleQtyUpdate("-")} style={{height: "40px", width: "40px"}}>-</button>
                            <div>{product.qty}</div>
                            <button onClick={() => handleQtyUpdate("+")} style={{height: "40px", width: "40px"}}>+</button>
                        </div>
                    </Fragment>
                }
                {cart ? <button className='btn btn-outline-danger p-1 w-100 mt-3' onClick={removeProduct}>Remove</button> : <button onClick={handleAddToCart} className="w-100 mt-3 p-1 bg-success border-0 text-light rounded"><MdShoppingCart /> Add To Cart</button>}
            </div>
        </div>
    )
}

export default ProductList

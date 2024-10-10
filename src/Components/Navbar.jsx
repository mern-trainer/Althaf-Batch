import React, { useContext } from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { CartContext } from '../Providers/CartProvider'
import { useCart } from '../Hooks'
// import { CartContext } from '../App'


const Navbar = () => {

    // const { cartList } = useContext(CartContext)
    const { cartList} = useCart()

    return (
        <div className="d-flex justify-content-between border-bottom align-items-center px-3" style={{height: "60px"}}>
            <div className="fs-3">SHOPIFY</div>
            <div className='d-flex'>
                <FaHeart size={20} className="me-4"/>
                <div className="position-relative">
                    <FaShoppingCart size={20} />
                    <div className='position-absolute' style={{top: "-10px", right: "-7px"}}>{ cartList.length }</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

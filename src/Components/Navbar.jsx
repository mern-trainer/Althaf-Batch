import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className="d-flex justify-content-between border-bottom align-items-center px-3" style={{height: "60px"}}>
            <div className="fs-3">SHOPIFY</div>
            <div>
                <FaHeart size={20} className="me-4"/>
                <FaShoppingCart size={20}/>
            </div>
        </div>
    )
}

export default Navbar

import { useContext } from "react"
import { CartContext } from "./Providers/CartProvider"

export const useCart = () => {
    return useContext(CartContext)
}
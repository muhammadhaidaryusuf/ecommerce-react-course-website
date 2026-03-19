import { useState } from "react";
import { CartContext } from "./CartContext";

export default function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]); // {example id:2, quantitiy: 7}

    function addToCart(productId) {
        const existing = cartItems.find((item) => item.id === productId) 
        if(existing) {
            const currentQuantity = existing.quantity
            const updatedCartItem = cartItems.map((item) => item.id === productId ? {id: productId, quantity: currentQuantity+1} : item)
            setCartItems(updatedCartItem);
        }else {
            // [...] adalah cara yang sering digunakan untuk menambahkan item pada akhir list item yang berbentuk STATE
            setCartItems([...cartItems, {id: productId, quantity: 1}])       
        }


    }

    return <CartContext.Provider value={{cartItems, addToCart}}>{children}</CartContext.Provider>
}

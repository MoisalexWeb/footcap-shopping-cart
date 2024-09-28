import { createContext } from "react";
import { useState } from "react";


// Paso: 1 Crear el contexto
export const CartContext = createContext();

// Paso 2: Crear el provider
export const CartProvider = ({ children }) => {
    // Carrito
    const [cart, setCart] =
        (localStorage.getItem('shoeCart'))
            ? useState(JSON.parse(localStorage.getItem('shoeCart')))
            : useState([]);


    // Precio total de todos los zapatos del carrito
    const [totalPrice, setTotalPrice] =
        (localStorage.getItem('totalPrice'))
            ? useState(localStorage.getItem('totalPrice'))
            : useState(0);


    // Para mostrar y/o ocualtar el carrito 
    const [showCart, setShowCart] = useState(false)


    // Numero de zapatos para mostrar en el icono del carrito
    const [totalShoes, setTotalShoes] =
        (localStorage.getItem('totalShoes'))
            ? useState(JSON.parse(localStorage.getItem('totalShoes')))
            : useState(0);


    return (
        <CartContext.Provider value={{
            // Aqui van los valores que se van a compartir
            cart,
            setCart,
            totalPrice,
            setTotalPrice,
            totalShoes,
            setTotalShoes,
            showCart,
            setShowCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

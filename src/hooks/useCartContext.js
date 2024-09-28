import { useContext } from "react"
import { CartContext } from "../context/cart.jsx"


export const useCartContext = () => {
    const { cart, setCart, totalShoes, setTotalShoes, showCart, setShowCart, totalPrice, setTotalPrice } = useContext(CartContext)


    // Para guardar en el local storage el carrito
    const updateLocalStorage = (cart, shoes = null) => {
        localStorage.setItem('shoeCart', JSON.stringify(cart))

        if (shoes !== null) localStorage.setItem('totalShoes', JSON.stringify(shoes))
    }


    // Actualizar el precio total del carrito cuando se agrega un icono
    const updateTotalPrice = (shoes) => {
        let price = 0
        shoes.map(item => {
            price += item.price * item.quantity
        })
        setTotalPrice(price.toFixed(2))
        localStorage.setItem('totalPrice', price.toFixed(2))
    }


    // Agregar al carrito
    const addToCart = (shoe) => {
        const shoeInCart = cart.findIndex(item => item.id === shoe.id)


        // Si ya esta en el carrito
        if (shoeInCart >= 0) {
            const newCart = structuredClone(cart)
            newCart[shoeInCart].quantity += 1
            updateTotalPrice(newCart)
            updateLocalStorage(newCart)
            setCart(newCart)
        }
        // Si no esta en el carrito
        else {
            setCart(prevState => {
                const newCart = [...prevState, { ...shoe, quantity: 1 }]
                const totalShoes = newCart.length
                updateTotalPrice(newCart)
                setTotalShoes(totalShoes)
                updateLocalStorage(newCart, totalShoes) // <--- Agregué esta línea
                return newCart
            })
        }
    }


    // Disminuir una cantidad del item del carrito
    const decreaseQuantity = (shoe) => {
        const shoeIndex = cart.findIndex(item => item.id === shoe.id)
        const newQuantity = cart[shoeIndex].quantity - 1

        // En caso de que quede cantidad para disminuir
        if (newQuantity >= 1) {
            const newCart = structuredClone(cart)
            newCart[shoeIndex].quantity = newQuantity
            updateTotalPrice(newCart)
            updateLocalStorage(newCart)
            setCart(newCart)
        }

        // Si la catidad es igual a 0 eliminar el elemento
        else {
            const newCart = cart.filter(item => item.id !== shoe.id)
            const totalShoes = newCart.length
            updateTotalPrice(newCart)
            setCart(newCart)
            setTotalShoes(totalShoes)
            updateLocalStorage(newCart, totalShoes)
        }
    }



    //  Limpiando el carrito
    const clearCart = () => {
        setCart([])
        setShowCart(false)
        updateLocalStorage([], 0)
        setTotalShoes(0)
        setTotalPrice(0)
        localStorage.setItem('totalPrice', 0)
    }


    return {
        cart,
        setCart,
        addToCart,
        totalShoes,
        totalPrice,
        showCart,
        setShowCart,
        clearCart,
        decreaseQuantity
    }
}

import "./Cart.scss"
import { useCartContext } from "../../hooks/useCartContext"



export const Cart = () => {
    const { cart, showCart, addToCart, clearCart, decreaseQuantity, totalPrice, setShowCart } = useCartContext()

    if (showCart) {
        return (
            <aside className="cart">
                {
                    (cart.length > 0)
                        ? <>
                            <ul className="cart__ul">
                                {cart.map(item => {
                                    return (
                                        <li className="cart__item" key={item.id}>
                                            <img src={item.image} alt={item.name} className="cart__item-img" />
                                            <p className="cart__item-name">{item.name}</p>
                                            <p className="cart__item-price">Total price: <span>{(item.price * item.quantity).toFixed(2)}$</span></p>

                                            <div className="cart__item__buttons">
                                                <button
                                                    className="cart__item__buttons-btn"
                                                    onClick={() => decreaseQuantity(item)}
                                                >
                                                    -
                                                </button>

                                                <span>{item.quantity}</span>

                                                <button
                                                    className="cart__item__buttons-btn"
                                                    onClick={() => addToCart(item)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </li>
                                    )
                                })}

                                <li className="cart-total">
                                    Total price: <span>{totalPrice}$</span>
                                </li>

                                <li>
                                    <button className="cart-empty-btn" onClick={clearCart}>
                                        empty cart
                                        <i className='bx bx-cart-download'></i>
                                    </button>
                                </li>
                            </ul>

                            <button className="cart-close" onClick={() => setShowCart(false)}>
                                <i className='bx bx-x'></i>
                            </button>
                        </>

                        : <>
                            <button className="cart-close" onClick={() => setShowCart(false)}>
                                <i className='bx bx-x'></i>
                            </button>
                            <p className="cart-empty">Your cart is empty</p>
                        </>
                }
            </aside>
        )
    }
}

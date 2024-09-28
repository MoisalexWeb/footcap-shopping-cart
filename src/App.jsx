import React from "react"
import Header from "./components/sections/Header/Header.jsx"
import { Hero } from "./components/sections/Hero/Hero.jsx"
import { Collections } from "./components/sections/Collections/Collections.jsx"
import { Products } from "./components/sections/Products/Products.jsx"
import { FiltersProvider } from "./context/filter.jsx"
import { CartProvider } from "./context/cart.jsx"
import { Cart } from "./components/Cart/Cart.jsx"
import { Shop } from "./components/sections/Shop/Shop.jsx"
import { Services } from "./components/sections/Services/Services.jsx"
import { Post } from "./components/sections/Post/Post.jsx"
import { Special } from "./components/sections/Special/Special.jsx"
import { Footer } from "./components/sections/Footer/Footer.jsx"


function App() {

    return (
        <>
            <CartProvider>
                <Header />
                <Cart />

                <main>
                    <Hero />
                    <Collections />

                    <FiltersProvider>
                        <Products />
                    </FiltersProvider>

                    <Shop />
                    <Special />
                    <Services />
                    <Post />
                </main>
                
                <Footer />
            </CartProvider>
        </>
    )
}

export default App

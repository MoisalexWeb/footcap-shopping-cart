import "./Shop.scss"
import { ShopCard } from "../../ShopCard/ShopCard"
import adidasImage from "/images/cta-1.jpg"
import nikeImage from "/images/cta-2.jpg"


export const Shop = () => {
    return (
        <section className="section-container shop" id="shop">
            <ShopCard
                brand="Adidas Shoes"
                title="the summer sale off 50%"
                image={adidasImage}
            />
            <ShopCard
                brand="Nike Shoes"
                title="makes yourself keep sporty"
                image={nikeImage}
            />
        </section>
    )
}

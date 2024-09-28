import "./Special.scss"
import bannerImage from "/images/special-banner.jpg"
import { ShoeCard } from "../../ShoeCard/ShoeCard"
import newEditionShoes from "../../../mocks/newEditionShoes.json"
import { useCartContext } from "../../../hooks/useCartContext"


export const Special = () => {
    const { addToCart } = useCartContext()

    return (
        <section className="section-container special">
            <div className="special__banner">
                <h3 className="special__banner-title">new trend edition</h3>
                <img src={bannerImage} alt="New shoes edition" className="special__banner-img" />
                <a href="#" className="special__banner-cta">
                    explore all
                    <i className='bx bx-arrow-back' ></i>
                </a>
            </div>

            <div className="special__shoes">
                <h2 className="special__shoes-title">nike special</h2>

                <ul className="special__shoes__slide">
                    {newEditionShoes.newEditionShoes.map(shoe => {
                        return (
                            <li key={shoe.id}>
                                <ShoeCard
                                    image={shoe.image}
                                    name={shoe.name}
                                    category={shoe.category}
                                    price={shoe.price}
                                    background='#f2f3f5'
                                    heightImage='initial'
                                    addToCart={() => addToCart(shoe)}
                                />
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </section>
    )
}

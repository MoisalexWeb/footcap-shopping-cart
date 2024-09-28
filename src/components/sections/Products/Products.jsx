import "./Products.scss"
import { Filters } from "../../Filters/Filters"
import { shoes } from "../../../mocks/shoes.json"
import { ShoeCard } from "../../ShoeCard/ShoeCard"
import { useFilterShoes } from "../../../hooks/useFilterShoes.js"
import { useCartContext } from "../../../hooks/useCartContext.js"



export const Products = () => {
    const { filterShoes } = useFilterShoes()
    const { addToCart } = useCartContext()
    const filteredShoes = filterShoes(shoes)

    


    return (
        <section className="products section-container" id="products">
            <h2 className="products-title">bestseller products</h2>
            <Filters />

            <div className="products__container">
                {
                    filteredShoes.map((shoe) => {
                        return (
                            <ShoeCard
                                category={shoe.category}
                                image={shoe.image}
                                name={shoe.name}
                                price={shoe.price}
                                key={shoe.id}
                                addToCart={() => addToCart(shoe)}
                            />
                        )
                    }) 
                }
            </div>
        </section>
    )
}
import "./Collections.scss"
import { CardCollections } from "../../CardCollections/CardCollections"
import { image1, image2, image3 } from "./importImages"



export const Collections = () => {
    return (
        <section className="collections section-container" id="collections">
            <CardCollections
                image={image1}
                altImage="Shoes"
                title="men collections"
                background="#b3e140"
            />

            <CardCollections
                image={image2}
                altImage="Shoes"
                title="women collections"
                background="#eebdea"
            />

            <CardCollections
                image={image3}
                altImage="Shoes"
                title="sports collections"
                background="#e7cfcf"
            />
        </section>
    )
}

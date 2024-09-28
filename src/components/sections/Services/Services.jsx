import "./Services.scss"
import { freeShipping, quickPayment, freeReturn, support } from "./importImages.js"
import { ServiceCard } from "../../ServiceCard/ServiceCard.jsx"


export const Services = () => {
    return (
        <section className="section-container services">
            <ServiceCard
                image={freeShipping}
                title="free shipping"
                text="All orders over $150"
            />

            <ServiceCard
                image={quickPayment}
                title="quick payment"
                text="100% secure payment"
            />

            <ServiceCard
                image={freeReturn}
                title="free returns"
                text="Money back in 30 days"
            />

            <ServiceCard
                image={support}
                title="24/7 support"
                text="Get Quick Support"
            />
        </section>
    )
}

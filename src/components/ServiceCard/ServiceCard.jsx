import "./ServiceCard.scss"

export const ServiceCard = ({ image, title, text }) => {
    return (
        <div className="serviceCard">
            <figure className="serviceCard__figure">
                <img src={image} alt={title} className="serviceCard__figure-img" />
            </figure>
            <div className="serviceCard__texts">
                <h3 className="serviceCard__texts-title">{title}</h3>
                <p className="serviceCard__texts-text">{text}</p>
            </div>
        </div>
    )
}

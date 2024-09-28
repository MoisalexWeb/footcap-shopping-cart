import "./ShopCard.scss"

export const ShopCard = ({ image, title, brand }) => {
    return (
        <div
            className="ShopCard"
            style={{'backgroundImage': `url(${image})`}}
        >
            <p className="ShopCard-brand">{brand}</p>
            <h3 className="ShopCard-title">{title}</h3>
            <button className="ShopCard-btn">shop now</button>
        </div>
    )
}

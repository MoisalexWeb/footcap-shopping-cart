import "./ShoeCard.scss"


export const ShoeCard = ({ image, name, category, price, addToCart, background, heightImage }) => {
    return (
        <div
            className="shoeCard"
            style={{'backgroundColor': `${(background) ? background : ''}`}}
        >
            <figure className="shoeCard__figure">
                <img
                    src={image}
                    alt={name}
                    className="shoeCard__figure-img"
                    style={{'height': `${(heightImage) ? heightImage : ''}`}}
                />

                <ul className="shoeCard__figure__ul">
                    <li>
                        <button
                            className="shoeCard__figure__ul__btn"
                            onClick={addToCart}
                        >
                            <i className='bx bx-cart'></i>
                            <span className="shoeCard__figure__ul__btn-span">Add to cart</span>
                        </button>
                    </li>
                    <li>
                        <button className="shoeCard__figure__ul__btn">
                            <i className='bx bxs-analyse'></i>
                            <span className="shoeCard__figure__ul__btn-span">Quick view</span>
                        </button>
                    </li>
                    <li>
                        <button className="shoeCard__figure__ul__btn">
                            <i className='bx bx-share-alt'></i>
                            <span className="shoeCard__figure__ul__btn-span">Share</span>
                        </button>
                    </li>
                </ul>
            </figure>

            <div className="shoeCard__texts">
                <p className="shoeCard__texts-category">{category}</p>
                <h3 className="shoeCard__texts-title">{name}</h3>
                <p className="shoeCard__texts-price">{price}$</p>
            </div>
        </div>
    )
}

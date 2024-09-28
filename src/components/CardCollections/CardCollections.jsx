import "./CardCollections.scss"


export const CardCollections = ({ image, altImage, title, background }) => {
    return (
        <div className="cardCollections" style={{'backgroundColor': `${background}`}}>
            <h3 className="cardCollections-title">{title}</h3>
            <img src={image} alt={altImage} className="cardCollections-img" />  
            <button className="cardCollections-cta">
                explore all
                <i className='bx bx-right-arrow-alt'></i>
            </button>
        </div>
    )
}

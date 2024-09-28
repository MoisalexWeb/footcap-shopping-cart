import "./PostItem.scss"

export const PostItem = ({ image, href }) => {
    return (
        <li className="postItem">
            <img src={image} className="postItem-img" alt="Post Image" />

            <a href={href} className="postItem-link">
                <i className='bx bxl-instagram'></i>
            </a>
        </li>
    )
}

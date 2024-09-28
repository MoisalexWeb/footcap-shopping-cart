import "./Post.scss"
import { PostItem } from "../../PostItem/PostItem"
import { image1, image2, image3, image4, image5, image6, image7, image8 } from "./importImages.js"


export const Post = () => {
    return (
        <section className="post">
            <ul className="post__ul">
                <PostItem
                    href="#"
                    image={image1}
                />

                <PostItem
                    href="#"
                    image={image2}
                />

                <PostItem
                    href="#"
                    image={image3}
                />

                <PostItem
                    href="#"
                    image={image4}
                />

                <PostItem
                    href="#"
                    image={image5}
                />

                <PostItem
                    href="#"
                    image={image6}
                />

                <PostItem
                    href="#"
                    image={image7}
                />

                <PostItem
                    href="#"
                    image={image8}
                />
            </ul>
        </section>
    )
}

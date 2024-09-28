import "./Footer.scss"
import logo from "/images/logo.svg"
import { useCartContext } from "../../../hooks/useCartContext"


export const Footer = () => {
    const { showCart, setShowCart } = useCartContext()

    return (
        <footer className="footer">
            <div className="section-container footer__container">

                <div className="footer__header">
                    <img src={logo} className="footer__header-logo" alt="Footcap logo" />

                    <ul className="footer__header__links">
                        <li>
                            <a href="#" className="footer__header__links-link">
                                <i className='bx bxl-facebook-circle' ></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer__header__links-link">
                                <i className='bx bxl-twitter' ></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer__header__links-link">
                                <i className='bx bxl-pinterest' ></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer__header__links-link">
                                <i className='bx bxl-linkedin-square' ></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <div className="footer__content__item footer__content__item--contact">
                        <h3 className="footer__content__item-title">contact us</h3>

                        <address className="footer__content__item__link">
                            <i className='bx bxs-location-plus' ></i>
                            <span>2751 S Parker Rd, Aurora, CO 80014, United States</span>
                        </address>

                        <a href="tel:+557343673257" className="footer__content__item__link">
                            <i className='bx bxs-phone' ></i>
                            <span>+55 7343673257</span>
                        </a>

                        <a href="mailto:footcap@info.com" className="footer__content__item__link">
                            <i className='bx bxs-envelope' ></i>
                            <span>footcap@info.com</span>
                        </a>
                    </div>

                    <div className="footer__content__item  footer__content__item--social">

                        <h3 className="footer__content__item-title">my account</h3>

                        <ul className="footer__content__item__ul">
                            <li>
                                <a href="#" className="footer__content__item__ul-link">
                                    <i className='bx bx-chevron-right' ></i>
                                    my account
                                </a>
                            </li>
                            <li>
                                <button 
                                    href="#" 
                                    className="footer__content__item__ul-link"
                                    onClick={() => setShowCart(!showCart)}
                                >
                                    <i className='bx bx-chevron-right' ></i>
                                    view cart
                                </button>
                            </li>
                            <li>
                                <a href="#" className="footer__content__item__ul-link">
                                    <i className='bx bx-chevron-right' ></i>
                                    compare
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__content__item__ul-link">
                                    <i className='bx bx-chevron-right' ></i>
                                    new products
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__content__item footer__content__item--time">
                        <h3 className="footer__content__item-title">opening time</h3>

                        <div className="footer__content__item__hours">
                        <p><strong>Mon - Tue:</strong> 8:00AM - 10:00PM</p>
                        <p><strong>Wed - Thu:</strong> 8:00AM - 7:00PM</p>   
                        <p><strong>Fri:</strong> 7:00AM - 12:00PM</p>
                        <p><strong>Sat:</strong> 9:00AM - 8:00PM</p>
                        <p><strong>Sun:</strong> Closed</p>
                        </div>
                    </div>

                    <div className="footer__content__item footer__content__item--newsletter">
                        <h3 className="footer__content__item-title">newsletter</h3>

                        <p className="footer__content__item-text">Authoritatively morph 24/7 potentialities with error-free partnerships.</p>

                        <form action="#" className="footer__content__item__form">
                            <input className="footer__content__item__form-input" type="email" placeholder="Email address" />
                            <input className="footer__content__item__form-submit" type="submit" value="suscribe" />
                        </form>
                    </div>
                </div>
            </div>

            <p className="footer-copyright">
                &copy; 2024. Coded by <a href="https://github.com/moisalexweb" target="_blank">moisalexweb</a>
            </p>
        </footer>
    )
}

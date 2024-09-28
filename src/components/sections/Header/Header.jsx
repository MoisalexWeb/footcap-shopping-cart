import logo from "/images/logo.svg"
import "./Header.scss"
import { useMobileMenu } from "../../../hooks/useMobilemenu.js"
import { useCartContext } from "../../../hooks/useCartContext.js"


const Header = () => {
    const { activeMenu, openCloseMenu, closeMenu } = useMobileMenu()
    const { totalShoes, showCart, setShowCart } = useCartContext()


    return (
        <>
            <header className={`header ${activeMenu ? "active-menu" : ""}`}>
                <nav className="nav">
                    <img src={logo} alt="Footcap logo" className="nav-logo" />

                    <div className="nav__content">
                        <img src={logo} alt="Footcap logo" className="nav__ul-logo" />

                        <ul className="nav__ul">
                            <li>
                                <a href="#home" className="nav__ul-link" onClick={closeMenu}>home</a>
                            </li>
                            <li>
                                <a href="#collections" className="nav__ul-link" onClick={closeMenu}>collections</a>
                            </li>
                            <li>
                                <a href="#products" className="nav__ul-link" onClick={closeMenu}>products</a>
                            </li>
                            <li>
                                <a href="#shop" className="nav__ul-link" onClick={closeMenu}>shop</a>
                            </li>
                            <li>
                                <a href="#" className="nav__ul-link" onClick={closeMenu}>contact</a>
                            </li>
                        </ul>

                        <div className="nav__buttons">
                            <button className="nav__buttons-btn" onClick={closeMenu}>
                                <i className='bx bx-user'></i>
                                <span className="nav__buttons-btn-text">login</span>
                            </button>
                            
                            <button className="nav__buttons-btn" onClick={() => {
                                setShowCart(!showCart)
                                closeMenu()
                            }}>
                                <i className='bx bx-cart'></i>
                                <span className="nav__buttons-btn-text">cart</span>
                                {(totalShoes > 0)
                                    ?  <span className="nav__buttons-btn-total">{totalShoes}</span>
                                    : null
                                }
                            </button>
                        </div>
                    </div>

                    <button className="nav__hamburger" onClick={openCloseMenu}>
                        <i className='bx bx-menu'></i>
                    </button>
                </nav>
            </header>
            <div className="background-menu" onClick={closeMenu}></div>
        </>
    )
}

export default Header
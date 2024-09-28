import { useState, useEffect } from "react"

export const useMobileMenu = () => {
    const [activeMenu, setActiveMenu] = useState(false)

    const openCloseMenu = () => setActiveMenu(!activeMenu)
    const closeMenu = () => setActiveMenu(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 800) closeMenu()
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return {
        activeMenu,
        openCloseMenu,
        closeMenu
    }
}

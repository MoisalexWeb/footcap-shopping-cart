import "./Filters.scss"
import { useContext } from "react"
import { FilterContext } from "../../context/filter"


export const Filters = () => {

    const { filter, setFilter } = useContext(FilterContext)

    const handleClick = e => {
        setFilter(e.target.dataset.brand)
    }

    return (
        <ul className="filters">
            <li>
                <button
                    className={`filters-btn ${filter === 'all' ? "active-btn" : ""}`}
                    data-brand="all"
                    onClick={handleClick}
                >
                    all
                </button>
            </li>
            <li>
                <button
                    className={`filters-btn ${filter === 'nike' ? "active-btn" : ""}`}
                    data-brand="nike"
                    onClick={handleClick}
                >
                    nike
                </button>
            </li>
            <li>
                <button
                    className={`filters-btn ${filter === 'adidas' ? "active-btn" : ""}`}
                    data-brand="adidas"
                    onClick={handleClick}
                >
                    adidas
                </button>
            </li>
            <li>
                <button
                    className={`filters-btn ${filter === 'puma' ? "active-btn" : ""}`}
                    data-brand="puma"
                    onClick={handleClick}
                >
                    puma
                </button>
            </li>
        </ul>
    )
}

import { useContext } from "react"
import { FilterContext } from "../context/filter"

export const useFilterShoes = () => {
    const  { filter } = useContext(FilterContext)

    const filterShoes = (shoes) => {
        if (filter === 'all') {
            return shoes
        }
        return shoes.filter((shoe) => {
            return shoe.brand === filter
        }) 
    }

    return {
        filterShoes
    }
}

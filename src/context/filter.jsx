import { createContext, useState } from "react";

// Paso 1: Crear el contexto
export const FilterContext = createContext()

// Paso 2: Crear el provider
export const FiltersProvider = ({ children }) => {
    const [filter, setFilter] = useState('all')
    return (
        <FilterContext.Provider value={{
            filter,
            setFilter
        }}>
            {children}
        </FilterContext.Provider>
    )
}
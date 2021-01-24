import { useState, createContext } from "react"

export const SearchContext = createContext({})

const SearchContextProvider = ({ children }) => {
  const [searchFor, setSearchFor] = useState("")
  const [instantSearch, setInstantSearch] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  return (
    <SearchContext.Provider
      value={{
        searchFor,
        setSearchFor,
        instantSearch,
        setInstantSearch,
        isSearching,
        setIsSearching,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider

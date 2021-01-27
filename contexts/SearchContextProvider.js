import { useState, createContext } from "react"

export const SearchContext = createContext({})

const SearchContextProvider = ({ children }) => {
  const [searchFor, setSearchFor] = useState("")
  const [instantSearch, setInstantSearch] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [jobListFromContext, setJobListFromContext] = useState([])
  const [searchInContext, setSearchInContext] = useState("")

  return (
    <SearchContext.Provider
      value={{
        searchFor,
        setSearchFor,
        instantSearch,
        setInstantSearch,
        isSearching,
        setIsSearching,
        jobListFromContext,
        setJobListFromContext,
        searchInContext,
        setSearchInContext,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider

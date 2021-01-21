import { useContext } from "react"

import styled from "styled-components"
import BtnFilled from "./BtnFilled"
import { SearchContext } from "../contexts/SearchContextProvider"

const SearchForm = () => {
  const { setSearchFor } = useContext(SearchContext)

  const handleOnSubmit = e => {
    e.preventDefault()
  }

  return (
    <MyComponent onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Atrast sludinājumu"
        onChange={e => setSearchFor(e.target.value.toLowerCase())}
      />

      <BtnFilled title="Search" />
    </MyComponent>
  )
}

export default SearchForm

const MyComponent = styled.form`
  position: sticky;
  top: 20px;

  inline-size: 100%;
  max-inline-size: 600px;
  margin: 0 auto;
  display: flex;

  input {
    background-color: var(--light-gray-color);
    border: 1px solid var(--light-gray-color);
    padding: 0 0 0 20px;
    inline-size: 100%;
    font-size: 14px;
    :focus {
      border: 1px solid var(--dark-gray-color);
    }
    ::placeholder {
      color: var(--mid-gray-color);
      opacity: 1; /* Firefox */
      font-weight: 300;
    }
  }
`

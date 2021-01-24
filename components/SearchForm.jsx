import { useState, useContext } from "react"

import styled, { css } from "styled-components"
import BtnFilled from "./BtnFilled"
import { SearchContext } from "../contexts/SearchContextProvider"

const SearchForm = () => {
  const { setSearchFor } = useContext(SearchContext)

  const [value, setValue] = useState("")
  const [searching, setSearching] = useState(false)

  const handleOnSubmit = e => {
    e.preventDefault()

    setSearchFor(value.replace(/ /g, "+"))
    setSearching(false)
  }

  return (
    <MyComponent onSubmit={handleOnSubmit} searching={searching}>
      <MySearchContainer>
        <input
          type="text"
          placeholder="Atrast sludinājumu"
          onChange={e => setValue(e.target.value.toLowerCase())}
          value={value}
          onClick={() => setSearching(true)}
        />

        <BtnFilled title="Search" />
      </MySearchContainer>
    </MyComponent>
  )
}

export default SearchForm

const MyComponent = styled.div`
  position: fixed;
  inline-size: 100%;
  block-size: 100px;
  top: 0;
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.9) 90%
  );

  ${props =>
    props.searching &&
    css`
      block-size: 100vh;
      background: #00000050;
    `}
`

const MySearchContainer = styled.form`
  inline-size: 100%;
  max-inline-size: 600px;
  margin: 0 auto;
  display: flex;
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.2);

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

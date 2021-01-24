import { useState, useEffect, useContext } from "react"

import styled, { css } from "styled-components"
import BtnFilled from "./BtnFilled"
import { SearchContext } from "../contexts/SearchContextProvider"

const SearchForm = () => {
  const {
    setSearchFor,
    instantSearch,
    setInstantSearch,
    isSearching,
    setIsSearching,
  } = useContext(SearchContext)

  const [value, setValue] = useState("")
  const [jobList, setJobList] = useState(null)

  // This is for onSubmitSearch
  const handleOnSubmit = e => {
    e.preventDefault()

    setSearchFor(value.replace(/ /g, "+"))
    setIsSearching(false)
  }

  // This is for instaSearch
  const handleOnChange = e => {
    e.preventDefault()
    setIsSearching(true)

    setInstantSearch(e.target.value.replace(/ /g, "+"))
  }

  useEffect(async () => {
    const jobList_res = await fetch(
      `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${instantSearch}`
    )
    const jobListData = await jobList_res.json()

    setJobList(jobListData)
  }, [instantSearch])

  return (
    <MyComponent onSubmit={handleOnSubmit} isSearching={isSearching}>
      <MyInnerWrapper>
        <MySearchContainer>
          <input
            type="text"
            placeholder="Atrast sludinājumu"
            onChange={e => {
              handleOnChange(e)
              setValue(e.target.value.toLowerCase())
            }}
            value={value}
            onClick={() => setIsSearching(true)}
          />

          <BtnFilled title="Search" />
        </MySearchContainer>

        {isSearching && (
          <MyInstantResultBox>
            {instantSearch[0] &&
              jobList
                ?.slice(0, 6)
                .map(job => <h1 key={job.id}>{job.title}</h1>)}
          </MyInstantResultBox>
        )}
      </MyInnerWrapper>
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

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.9) 90%
  );

  ${props =>
    props.isSearching &&
    css`
      block-size: 100vh;
      background: #00000050;
    `}
`

const MyInnerWrapper = styled.div`
  margin: 30px 0 0;
  inline-size: 100%;
  position: relative;

  display: flex;
  justify-content: center;
`

const MySearchContainer = styled.form`
  position: fixed;
  top: 30px;
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
const MyInstantResultBox = styled.div`
  inline-size: 100%;
  max-inline-size: 640px;
  background-color: #fff;
  padding: 100px 20px 20px;
  margin: -20px 0 0;
  border-radius: 10px;
`

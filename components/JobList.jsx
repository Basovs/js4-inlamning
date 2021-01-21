import { useContext } from "react"
import styled from "styled-components"

import { SearchContext } from "../contexts/SearchContextProvider"

const JobList = ({ jobList }) => {
  const { searchFor } = useContext(SearchContext)

  return (
    <MyComponent>
      {console.log(jobList)}
      {jobList
        .filter(job => job.description.toLowerCase().includes(searchFor))
        .map(job => (
          <MyJobItem key={job.id}>
            <h2>{job.title}</h2>
            {/* <p>{job.description}</p> */}
            <div dangerouslySetInnerHTML={{ __html: job.description }} />
          </MyJobItem>
        ))}
    </MyComponent>
  )
}

export default JobList

const MyComponent = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr)); */
  /* gap: 10px; */
`

const MyJobItem = styled.div`
  inline-size: 100%;
  max-inline-size: 600px;
  margin: 0 auto;
  padding: 20px;
`

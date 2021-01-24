import { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import Link from "next/link"

import { SearchContext } from "../contexts/SearchContextProvider"

const JobList = () => {
  const { searchFor } = useContext(SearchContext)

  const [jobList, setJobList] = useState(null)

  useEffect(async () => {
    const jobList_res = await fetch(
      `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${searchFor}`
    )
    const jobListData = await jobList_res.json()

    setJobList(jobListData)
  }, [searchFor])

  return (
    <MyComponent>
      {jobList
        // ?.filter(job => job.description.toLowerCase().includes(searchFor))
        .map(job => (
          <Link key={job.id} href={`/${job.id}`}>
            <MyJobItem>
              <h2>{job.title}</h2>
              {/* <p>{job.description}</p> */}
              <div dangerouslySetInnerHTML={{ __html: job.description }} />
            </MyJobItem>
          </Link>
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
  cursor: pointer;
`

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
        ?.map(job => (
          <Link key={job.id} href={`/${job.id}`}>
            <a>
              <MyJobCard>
                <h2>{job.title}</h2>
                {/* <p>{job.description}</p> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: job.description.substr(0, 300) + "...",
                  }}
                />
              </MyJobCard>
            </a>
          </Link>
        ))}
    </MyComponent>
  )
}

export default JobList

const MyComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 100px 20px 0;
`

const MyJobCard = styled.div`
  inline-size: 100%;
  max-inline-size: 600px;
  margin: 20px 0;
  padding: 20px;
  background-color: var(--light-gray-color);
  border-radius: 10px;
  cursor: pointer;
`

import { useEffect, useContext } from "react"
import styled from "styled-components"
import Link from "next/link"

import { SearchContext } from "../contexts/SearchContextProvider"
// import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"

const JobList = ({ dummyJobList }) => {
  const {
    searchFor,
    jobListToRender,
    setJobListToRender,
    searchInContext,
  } = useContext(SearchContext)

  useEffect(async () => {
    const checkAgainstContextData = jobListToRender
      .filter(job => {
        job.description.includes(searchInContext)
      })
      .map(item => console.log(item))
    // console.log(checkAgainstContextData)

    const jobList_res = await fetch(
      `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${searchFor}`
    )
    const jobListData = await jobList_res.json()

    setJobListToRender(jobListData)

    jobListData.forEach(({ id }) => {
      jobListToRender[id] = jobListToRender[id]
    })

    // console.log(jobListToRender)

    // Extract ID from object for better performance and to check against for not making dublicated jobItems in array
    // jobListToRender.reduce(
    //   (
    //     res,
    //     {
    //       company,
    //       company_logo,
    //       company_url,
    //       created_at,
    //       description,
    //       how_to_apply,
    //       id,
    //       location,
    //       title,
    //       type,
    //       url,
    //     }
    //   ) => {
    //     res[id] = {
    // company: company,
    // company_logo: company_logo,
    // company_url: company_url,
    // created_at: created_at,
    // description: description,
    // how_to_apply: how_to_apply,
    // location: location,
    // title: title,
    // type: type,
    // url: url,
    //     }
    //     return res
    //   },
    //   {}
    // )

    // console.log(newJobListData)
  }, [searchFor])

  return (
    <MyComponent>
      {jobListToRender?.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        jobListToRender?.map(job => (
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
        ))
      )}
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

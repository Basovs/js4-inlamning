import styled from "styled-components"
import BtnBack from "../components/BtnBack"

const SpecificJobPage = ({ job }) => {
  return (
    <MyComponent>
      <MyWrapper>
        <BtnBack />
        <h1>{job.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: job.description }} />
      </MyWrapper>
    </MyComponent>
  )
}

export default SpecificJobPage

export async function getServerSideProps({ params }) {
  const job_res = await fetch(
    `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${params.jobID}`
  )
  const job = await job_res.json()

  return {
    props: {
      job,
    },
  }
}

const MyComponent = styled.div`
  padding: 50px 0;
`

const MyWrapper = styled.div`
  inline-size: 100%;
  max-inline-size: 600px;
  margin: 0 auto;
`

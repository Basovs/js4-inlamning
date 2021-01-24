import { useEffect, useContext } from "react"
import Head from "next/head"
import JobList from "../components/JobList"
import SearchForm from "../components/SearchForm"
import { SearchContext } from "../contexts/SearchContextProvider"

export default function Home() {
  const { setIsSearching } = useContext(SearchContext)

  useEffect(() => {
    setIsSearching(false)
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchForm />

      <JobList />
    </>
  )
}

// export async function getServerSideProps() {
//   const jobList_res = await fetch(
//     `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${""}`
//   )
//   const jobList = await jobList_res.json()

//   return {
//     props: {
//       jobList,
//     },
//   }
// }

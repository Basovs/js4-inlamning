import Head from "next/head";
import JobList from "../components/JobList";
import SearchForm from "../components/SearchForm";

export default function Home({ jobList }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchForm />

      <JobList jobList={jobList} />
    </div>
  );
}

export async function getStaticProps() {
  // Fetching whole jobList for static props data
  const jobList_res = await fetch(
    "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=javascript"
  );
  const jobList = await jobList_res.json();

  return {
    props: {
      jobList,
    },
  };
}

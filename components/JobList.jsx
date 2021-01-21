import { useContext } from "react";
import styled from "styled-components";

import { SearchContext } from "../contexts/SearchContextProvider";

const JobList = ({ jobList }) => {
  const { searchFor } = useContext(SearchContext);

  return (
    <MyComponent>
      {console.log(jobList)}
      {jobList
        .filter(job => job.description.includes(searchFor))
        .map(job => (
          <MyJobItem key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
          </MyJobItem>
        ))}
    </MyComponent>
  );
};

export default JobList;

const MyComponent = styled.div``;

const MyJobItem = styled.div``;

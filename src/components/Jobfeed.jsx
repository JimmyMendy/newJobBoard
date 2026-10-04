import React from "react";
import { jobsList } from "../dummydata/jobPost";

const Jobfeed = () => {

  // filtering jobfeed 
  const filteredjobList = jobsList.filter((job) => job.jobTitle.contains() && job.location.contains() )
  console.log(jobsList);
  return (
    <>
      {jobsList.map((job) => (
        <div key={job.id}>
          <h1>{job.jobTitle}</h1>
          <h2>{job.location}</h2>
          <p>{job.description}</p>
        </div>
      ))}
    </>
  );
};

export default Jobfeed;

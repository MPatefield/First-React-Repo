import React from 'react'

//Functional component to display a single job item
const JobItem = ({ job }) => {
  return (
    //Display the job name and status with a class based on the job's status
    <div className={`job-item ${job.status}`}>
      <h3>{job.id}.  {job.name}</h3>
      <p style={{ color: job.status === "running" ? "green" : "red"}}>Status: {job.status}</p>
    </div>
  )
}

export default JobItem

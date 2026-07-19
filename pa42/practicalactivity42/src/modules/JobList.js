import React from 'react'
import JobItem from './JobItem.js'


//Functional component to display a list of jobs
const JobList = ({ jobs }) => {
  return (
    <div className='job-list'>
      {/* Map through the jobs array and display each job's name and status */}
      {jobs.map(job => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  )
}

export default JobList

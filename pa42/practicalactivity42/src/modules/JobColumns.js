import React from 'react'
import '../JobColumn.css'
import JobCard from './JobCard'

const JobColumns = (props) => {
  const jobList = props.jobList
  const value = props.value
  return (

    <section className="col">
      <h2 className="hd-status">
        {value}<img className='col-icon' src={props.img} alt={value} />
      </h2>
      {jobList.map((job) =>
        <JobCard key={job.id} job={job} updateJobStatus={props.updateJobStatus} handleDelete={props.handleDelete} />
      )}
    </section>

  )
}

export default JobColumns

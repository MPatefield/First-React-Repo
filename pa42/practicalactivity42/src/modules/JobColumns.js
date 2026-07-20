import React from 'react'
import '../JobColumn.css'

const JobColumns = (props) => {
    const jobList = props.jobList
    const value = props.value
  return (
  
      <section className="col">
        <h2 className="hd-status">{value}<img className='col-icon' src={props.img} alt={value}/></h2>
        {jobList.map((job) => <p key={job.id}>{job.name} - {job.status}</p>)}
        </section>
    
  )
}

export default JobColumns

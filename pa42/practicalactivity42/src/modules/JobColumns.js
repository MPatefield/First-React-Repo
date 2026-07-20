import React from 'react'
import '../JobColumn.css'

const JobColumns = (props) => {
  const jobList = props.jobList
  const value = props.value
  return (

    <section className="col">
      <h2 className="hd-status">
        {value}<img className='col-icon' src={props.img} alt={value} />
      </h2>
      {jobList.map((job) =>
        <div key={job.id}>
          <p>{job.name} - {job.status}</p>
          <select className="edit-select" value={job.status} onChange={(e) => props.updateJobStatus(job.id, e.target.value)} >
            <option value='need to start'>Need to Start</option>
            <option value='in progress'>In Progress</option>
            <option value='completed'>Completed</option>
          </select>
          <button className="delete-btn" onClick={() => props.handleDelete(job.id)}>Delete</button>
        </div>)}
    </section>

  )
}

export default JobColumns

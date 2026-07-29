import React from 'react'

const JobCard = (props) => {

    const job = props.job
    const updateJobStatus=props.updateJobStatus
    const handleDelete=props.handleDelete

  return (
    <div>
      <p>{job.name} - {job.status} - {job.categories.join(', ')}</p>
          <select className="edit-select" value={job.status} onChange={(e) => updateJobStatus(job.id, e.target.value)} >
            <option value='need to start'>Need to Start</option>
            <option value='in progress'>In Progress</option>
            <option value='completed'>Completed</option>
          </select>
          <button className="delete-btn" onClick={() => handleDelete(job.id)}>Delete</button>
    </div>
  )
}

export default JobCard

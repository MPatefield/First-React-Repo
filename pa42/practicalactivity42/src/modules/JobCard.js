import React, { useState } from 'react'

const JobCard = (props) => {
    const job = props.job
    const updateJobStatus = props.updateJobStatus
    const handleDelete = props.handleDelete

    const [editMode, setEditMode] = useState(false) // toggles between view/edit mode
    const [tempJobName, setTempJobName] = useState(job.name) // draft name while editing

    // Enter edit mode, pre-filling the draft with the current name
    const startEdit = () => {
        setTempJobName(job.name);
        setEditMode(true)
    };

    // Commit the draft name up to JobManager, then exit edit mode
    const saveEdit = () => {
        const newName = tempJobName.trim();
        props.updateJobName(job.id, newName)
        setEditMode(false)
    }

    // Editing view: name becomes an editable input, plus Save/Cancel
    if (editMode) {
        return (
            <div>
                <p>
                    <input value={tempJobName} onChange={(e) => { const value = e.target.value; setTempJobName(value) }}></input>
                    {' '}- {job.status} - {job.categories.join(', ')}
                </p>
                <button onClick={() => saveEdit()}>Save</button>
                <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
        )
    }

    // Normal (read-only) view: details, status dropdown, edit + delete buttons
    return (
        <div>
            <p>{job.name} - {job.status} - {job.categories.join(', ')}</p>

            {/* Changing status here calls updateJobStatus directly - no edit mode needed */}
            <select className="edit-select" value={job.status} onChange={(e) => updateJobStatus(job.id, e.target.value)}>
                <option value='need to start'>Need to Start</option>
                <option value='in progress'>In Progress</option>
                <option value='completed'>Completed</option>
            </select>

            <button className="edit-btn" onClick={startEdit}>Edit Job Name</button>
            <button className="delete-btn" onClick={() => handleDelete(job.id)}>Delete</button>
        </div>
    )
}

export default JobCard
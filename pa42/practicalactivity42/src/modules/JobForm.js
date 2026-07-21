import React, { useState } from 'react'

const JobForm = (props) => {
    const [newJob, setNewJob] = useState({ id: '', name: '', status: '' });
    const [success, setSuccess] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewJob({ ...newJob, [name]: value });
    };

    const resetForm = () => {
        setNewJob({ id: "", name: "", status: "" });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newJob.id && newJob.name && newJob.status) {
            console.log(newJob);
            props.addJobToList(newJob);
            resetForm()
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false)
            }, 2000);
        } else {
            alert("All Fields must be filled");
        }
    }



    return (

        <form className="add-job-form" onSubmit={handleSubmit}>

            <input type="text"
                placeholder="Job ID"
                name="id"
                value={newJob.id}
                onChange={handleInputChange} />
            <input type="text"
                placeholder="Job Name"
                name="name"
                value={newJob.name}
                onChange={handleInputChange} />
            <select name="status" value={newJob.status} onChange={handleInputChange}>
                <option value="">Select Status</option>
                <option value="need to start">Need to start</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <button type="reset" onClick={resetForm}>Reset Form</button>
            <button type="submit" disabled={newJob.id === "" || newJob.name === "" || newJob.status === ""} >Add Job</button>
            {success && <p>Job added successfully!</p>}
        </form>

    )
}

export default JobForm

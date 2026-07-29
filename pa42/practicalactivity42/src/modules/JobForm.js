import React, { useState } from 'react'
import FormButtons from './FormButtons';
import './JobForm.css'

const JobForm = (props) => {
    // Holds the current values typed/selected for the job being created.
    // Starts empty — nothing filled in yet.
    // NOTE: "categories" here always stays [] and is never updated directly —
    // the real, live-updating category selections are tracked separately below.
    const [newJob, setNewJob] = useState({ id: '', name: '', status: '', categories: [] });

    // The actual array of currently selected categories.
    // This updates every time the user clicks a category button (toggle on/off).
    const [categories, setCategories] = useState([])

    // Controls whether the "Job added successfully!" message is shown.
    const [success, setSuccess] = useState(false)

    // Runs on every keystroke/change in the id, name, and status inputs.
    // Uses the input's "name" attribute to know which property of newJob to update,
    // so one function can handle all three fields instead of writing one per field.
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Spread newJob first (keep everything else the same),
        // then overwrite just the one property that changed.
        setNewJob({ ...newJob, [name]: value });
    };

    // Called whenever a category button is clicked.
    // Adds the category if it's not already selected, removes it if it is —
    // this is the "toggle" behaviour.
    const handleCategoryToggle = (category) => {
        // .some() checks: is this category ALREADY in the array?
        if (categories.some(cat => cat === category)) {
            // Already selected -> remove it, keeping every other category as-is.
            const updatedCategories = categories.filter(cat => cat !== category)
            setCategories(updatedCategories)
        } else {
            // Not selected yet -> add it to the end of the array (immutably,
            // using spread to build a brand new array rather than mutating the old one).
            setCategories([...categories, category])
        }
    }

    // Clears the form's id/name/status fields back to empty.
    // Note: doesn't currently reset "categories" — selected category buttons
    // stay highlighted after a submit/reset.
    const resetForm = () => {
        setNewJob({ id: "", name: "", status: "" });
    }

    // Runs when the form is submitted (clicking "Add Job" or pressing Enter).
    const handleSubmit = (e) => {
        // Stop the browser's default full-page-reload behaviour on form submit.
        e.preventDefault()

        // Validation: only proceed if id, name, and status all have values.
        if (newJob.id && newJob.name && newJob.status && categories.length > 0) {

            // newJob's own "categories" field is always empty (never updated),
            // so build a NEW object here that combines newJob with the real,
            // currently-selected categories — without mutating newJob directly.
            const finalJob = { ...newJob, categories: categories }

            console.log(finalJob); // Show the complete job details in the console

            props.addJobToList(finalJob); // Hand the finished job up to App to add to state

            resetForm() // Clear the form fields back to empty

            setSuccess(true); // Show the success message

            // Hide the success message again after 2 seconds
            setTimeout(() => {
                setSuccess(false)
            }, 2000);

        } else {
            // At least one required field was empty
            alert("All Fields must be filled");
        }
    }

    return (
        <form className="add-job-form" onSubmit={handleSubmit}>

            {/* Controlled input: value always reflects newJob.id, updates on typing */}
            <input type="text"
                placeholder="Job ID"
                name="id"
                value={newJob.id}
                onChange={handleInputChange} />

            {/* Controlled input for the job name */}
            <input type="text"
                placeholder="Job Name"
                name="name"
                value={newJob.name}
                onChange={handleInputChange} />

            {/* Category selection buttons.
                Each FormButtons component:
                - Displays its own "value" (category name)
                - Highlights itself if that value is currently in "categories"
                - Calls handleCategoryToggle with its own value when clicked */}
            <div className='btn-container'>
                <FormButtons isSelected={categories.includes("Read Emails")} value="Read Emails" onSelect={handleCategoryToggle} />
                <FormButtons isSelected={categories.includes("Web Parsing")} value="Web Parsing" onSelect={handleCategoryToggle} />
                <FormButtons isSelected={categories.includes("Data Analysis")} value="Data Analysis" onSelect={handleCategoryToggle} />
            </div>

            {/* Shows a readable list of whatever's currently selected */}
            <p>Selected categories: {categories.join(', ')}</p>
            <div className="controls-container">
                <button onClick={() => setCategories([])} type='button'>Reset Categories</button>

                {/* Controlled dropdown for job status */}
                <select name="status" value={newJob.status} onChange={handleInputChange}>
                    <option value="">Select Status</option>
                    <option value="need to start">Need to start</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>

                {/* Manually clears the form without submitting */}
                <button type="reset" onClick={resetForm}>Reset Form</button>

                {/* Disabled until id, name, and status are all filled in */}
                <button type="submit" disabled={newJob.id === "" || newJob.name === "" || newJob.status === "" || categories.length < 1}>Add Job</button>
            </div>
            {/* Only rendered while success is true */}
            {success && <p>Job added successfully!</p>}
        </form>
    )
}

export default JobForm
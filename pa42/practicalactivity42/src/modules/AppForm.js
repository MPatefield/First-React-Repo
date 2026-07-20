import React from 'react'
import { useState } from 'react'
import './AppForm.css'
import FormButtons from './FormButtons.js'

const AppForm = () => {
    const [jobTitle, setJobTitle] = useState("")
    const [processValue, setProcessValue] = useState("")
    const [jobCategory, setJobCategory] = useState("")

    const submitForm = (e) => {
        e.preventDefault()
        if (jobTitle === "" || processValue === "" || jobCategory ==="") {
            alert("Please enter ALL fields to continue..")
        } else {
            console.log(jobTitle, processValue, jobCategory)
        }
    }
    const handleInputChange = (e) => {
        const value = e.target.value;
        setJobTitle(value)
    }
    return (
        <div className="formheader">
            <form onSubmit={submitForm}>
                <input value={jobTitle} onChange={handleInputChange} type="text" className='bot_in' placeholder='Enter the Job'></input>
                <div className='formdetails'>
                    <div className="bottomline">
                        <FormButtons value="Read Emails" setJobCategory={setJobCategory}/>
                        <FormButtons value="Web Parsing" setJobCategory={setJobCategory}/>
                        <FormButtons value="Data Analysis" setJobCategory={setJobCategory}/>
                    </div>
                </div>
                <div>
                    <select className="jobStatus" value={processValue} onChange={(e) => { const value = e.target.value; setProcessValue(value) }}>
                        <option value="Start">Start Process</option>
                        <option value="stopped">Stop Process</option>
                        <option value="completed">Complete Process</option>

                    </select>
                    <button type='submit' className="submitdata">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default AppForm

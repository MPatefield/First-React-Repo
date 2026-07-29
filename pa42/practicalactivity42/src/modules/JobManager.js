import React from 'react'
import { useState } from 'react';
import JobList from './JobList';
import JobColumns from './JobColumns';
import JobForm from './JobForm';

const JobManager = () => {

    const needToStartImg = "https://placehold.co/60x60?text=Start";
    const inProgressImg = "https://placehold.co/60x60?text=Prog";
    const completedImg = "https://placehold.co/60x60?text=Done";

    const [list, setList] = useState(true);
    const [jobs, setJobs] = useState([
        { id: 1, name: 'Email Extractor', status: 'need to start', categories: [] },
        { id: 2, name: 'Data Analyser', status: 'in progress', categories: [] },
        { id: 3, name: 'Report Generator', status: 'completed', categories: [] },
    ]);

    const addJobToList = (newJob) => {
        setJobs([...jobs, newJob]);
    };

    const handleDelete = (id) => {
        const updatedJobs = jobs.filter(job => job.id !== id);
        setJobs(updatedJobs);
    }

    const updateJobStatus = (id, newStatus) => {
        setJobs(jobs.map((job) => job.id === id ? { ...job, status: newStatus } : job))
    }

    return (
        <div>

            <JobForm addJobToList={addJobToList} />

      <main className="headerfunc">
        <JobColumns value='Need to Start' updateJobStatus={updateJobStatus} handleDelete={handleDelete} img={needToStartImg} jobList={jobs.filter(j => j.status === 'need to start')} />
        <JobColumns value='In Progress' updateJobStatus={updateJobStatus} handleDelete={handleDelete} img={inProgressImg} jobList={jobs.filter(j => j.status === 'in progress')} />
        <JobColumns value='Completed' updateJobStatus={updateJobStatus} handleDelete={handleDelete} img={completedImg} jobList={jobs.filter(j => j.status === 'completed')} />
      </main>



      {/*Button to toggle the visibility of the job list*/}
      <button onClick={() => setList(!list)}>
        {/*Change the button text based on the visibility of the job list*/}
        {list ? 'Hide Jobs' : 'Show Jobs'}
      </button>
      {/*Render the JobList component if the list state is true*/}
      {list && (<JobList jobs={jobs} />)}

        </div>
    )
}

export default JobManager

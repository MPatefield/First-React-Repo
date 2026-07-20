import React from 'react';
import './App.css';
import { useState } from 'react';
import JobList from './modules/JobList';
import Header from './modules/Header';
import Footer from './modules/Footer';
import JobColumns from './modules/JobColumns';


function App() {
  const needToStartImg = "https://placehold.co/60x60?text=Start";
  const inProgressImg = "https://placehold.co/60x60?text=Prog";
  const completedImg = "https://placehold.co/60x60?text=Done";
  const [list, setList] = useState(true);
  const [newJob, setNewJob] = useState({ id: '', name: '', status: '' });
  const [jobs, setJobs] = useState([
    { id: 1, name: 'Email Extractor', status: 'need to start' },
    { id: 2, name: 'Data Analyser', status: 'in progress' },
    { id: 3, name: 'Report Generator', status: 'completed' },
  ]);

  const addJobToList = () => {
    if (newJob.id && newJob.name && newJob.status) {
      setJobs([...jobs, newJob]);
      setNewJob({ id: "", name: "", status: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };


  return (

    <div className="App">

      <Header />

      <main className="headerfunc">
        <JobColumns value='Need to Start' img={needToStartImg} jobList={jobs.filter(j => j.status === 'need to start')} />
        <JobColumns value='In Progress' img={inProgressImg} jobList={jobs.filter(j => j.status === 'in progress')} />
        <JobColumns value='Completed' img={completedImg} jobList={jobs.filter(j => j.status === 'completed')} />
      </main>

      {/*Button to toggle the visibility of the job list*/}

      <button onClick={() => setList(!list)}>
        {/*Change the button text based on the visibility of the job list*/}
        {list ? 'Hide Jobs' : 'Show Jobs'}
      </button>
      {/*Render the JobList component if the list state is true*/}
      {list && (<JobList jobs={jobs} />)}

      {/*Form to add a new job to the list*/}
      <div className="add-job-form">
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
        <button onClick={addJobToList}>Add Job</button>
      </div>

      <Footer />
    </div>

  );
}

export default App;

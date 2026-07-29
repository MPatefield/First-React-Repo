import React from 'react';
import './App.css';
import Header from './modules/Header';
import Footer from './modules/Footer';
import JobManager from './modules/JobManager';


function App() {

  return (

    <div className="App">

      <Header />
      <JobManager />
      <Footer />

    </div>

  );
}

export default App;

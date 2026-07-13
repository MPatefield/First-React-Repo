import React from 'react';
import './App.css';
import { useState } from 'react';
import JobList from './modules/JobList';
import JobItem from './modules/JobItem';
import Header from './modules/header';
import Footer from './modules/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <JobList />
      <Footer />
    </div>

  );
}

export default App;

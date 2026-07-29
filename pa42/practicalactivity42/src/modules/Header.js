import React from 'react'
import jobBoardImage from '../images/jobs.jpg'
import'./Header.css'

const Header = () => {
  return (
    <header className="headtop">
      <a href="/">
        <img className="logo" src={jobBoardImage} alt="Job Board" />
      </a>
      <h1>Job Board</h1>
    </header>
  )
}

export default Header

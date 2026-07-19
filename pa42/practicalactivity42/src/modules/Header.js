import React from 'react'
import jobBoardImage from '../images/jobs.jpg'
import AppForm from './AppForm'

const Header = () => {
  return (
    <header>
      <h1>Job Board</h1>
      <a href="/">
        <img style={{ width: '100%', height: '10vh' }} src={jobBoardImage} alt="Job Board" />
      </a>
      <AppForm/>
    </header>
  )
}

export default Header

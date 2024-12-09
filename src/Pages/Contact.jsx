import React from 'react'
import withDarkMode from '../utils/withDarkMode'
import withAuth from '../utils/withAuth'

const Contact = ({name}) => {
  return (
    <div>
      <h1>Contact</h1>
      <p>{name}</p>
    </div>

  )
}

export default withAuth(withDarkMode(Contact))
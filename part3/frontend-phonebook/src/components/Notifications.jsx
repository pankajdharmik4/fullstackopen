import React from 'react'

const styleGreen = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
}

const styleRed = {
  color: 'red',
  background: 'lightgrey',
  fontSize: 20,
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
}
const Notifications = ({ message,error }) => {
  if (message === null) {
    return null
  }

  return (
    <div style={error?styleGreen:styleRed} >
      {message}
    </div>
  )
}

export default Notifications
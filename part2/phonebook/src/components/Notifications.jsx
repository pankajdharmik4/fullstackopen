import React from 'react'

const style = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
}
const Notifications = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div style={style} >
      {message}
    </div>
  )
}

export default Notifications
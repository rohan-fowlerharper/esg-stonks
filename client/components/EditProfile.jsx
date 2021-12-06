import React from 'react'

function EditProfile () {
  function handleSubmit (event) {
    event.preventDefault()
    console.log('submit')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <label>
        Confirm Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default EditProfile

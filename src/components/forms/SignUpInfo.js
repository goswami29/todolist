import React from 'react'

const SignUpInfo = ({ formData, setFormData }) => {

  return (
    <div className='signup'>
      <input type="text"
        className="inputBox"
        value={formData.email}
        onChange={(event) => { setFormData({ ...formData, email: event.target.value }) }}
        placeholder="Email.." />

      <input type="text"
        value={formData.password}
        className="inputBox"
        onChange={(event) => { setFormData({ ...formData, password: event.target.value }) }}
        placeholder="Password.." />

      <input type="text"
        className="inputBox"
        value={formData.confirmPassword}
        onChange={(event) => { setFormData({ ...formData, confirmPassword: event.target.value }) }}
        placeholder="Confirm Password.." />

    </div>
  )
}

export default SignUpInfo
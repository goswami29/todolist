import React from 'react'

const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <div className='personal-info'>
      <input type="text"
        className="inputBox"
        value={formData.firstName}
        onChange={(event) => { setFormData({ ...formData, firstName: event.target.value }) }}
        placeholder="First Name..." />

      <input type="text"
        className="inputBox"
        value={formData.lastName}
        onChange={(event) => { setFormData({ ...formData, lastName: event.target.value }) }}
        placeholder="Last Name..." />

      <input type="text"
        className="inputBox"
        value={formData.username}
        onChange={(event) => { setFormData({ ...formData, username: event.target.value }) }}
        placeholder="Username..." />
    </div>
  )
}

export default PersonalInfo
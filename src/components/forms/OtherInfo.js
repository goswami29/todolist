import React from 'react'

const OtherInfo = ({ formData, setFormData }) => {
  return (
    <div className='other-info'>
      <input type="text"
        className="inputBox"
        value={formData.nationality}
        onChange={(event) => { setFormData({ ...formData, nationality: event.target.value }) }}
        placeholder="Nationality..." />

      <input type="text"
        className="inputBox"
        value={formData.other}
        onChange={(event) => { setFormData({ ...formData, other: event.target.value }) }}
        placeholder="Other..." />
    </div>
  )
}

export default OtherInfo
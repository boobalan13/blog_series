'use client'
import React, { useState, useEffect } from 'react'
import defaultDataset from './defaultDataset'

const Create = () => {
  const [dataset, setDataset] = useState([])
  const [formData, setFormData] = useState({
    episode_id: '',
    episode_name: '',
    episode_image: '',
    description: '',
    duration: '',
    release_date: ''
  })

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('episodes'))
    if (localData) {
      setDataset(localData)
    } else {
      setDataset(defaultDataset)
      localStorage.setItem('episodes', JSON.stringify(defaultDataset))
    }
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updated = [...dataset, formData]
    localStorage.setItem('episodes', JSON.stringify(updated))
    setDataset(updated)
    alert('Episode added!')
  }

  return (
    <div>
      <center>
        <h2>Create Blog</h2>
      </center>

      <form onSubmit={handleSubmit} className="create_form">
        {Object.entries(formData).map(([key, value]) => (
          <input
            key={key}
            type="text"
            name={key}
            value={value}
            onChange={handleChange}
            placeholder={key.replace('_', ' ')}
            required
          />
        ))}
        <button type="submit">Create Blog</button>
      </form>
    </div>
  )
}

export default Create

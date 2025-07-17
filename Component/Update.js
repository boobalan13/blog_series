'use client'
import React, { useState, useEffect } from 'react'
import defaultDataset from './defaultDataset'

const Update = () => {
  const [formData, setFormData] = useState({
    episode_id: '',
    episode_name: '',
    episode_image: '',
    description: '',
    duration: '',
    release_date: ''
  })

  const [isEditable, setIsEditable] = useState(false)
  const [dataset, setDataset] = useState([])

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

  const handleEpisodeIDCheck = (e) => {
    e.preventDefault()
    const episode = dataset.find((ep) => ep.episode_id === formData.episode_id)
    if (episode) {
      setFormData(episode)
      setIsEditable(true)
    } else {
      alert('Episode ID not found!')
      setIsEditable(false)
    }
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const updated = dataset.map((ep) =>
      ep.episode_id === formData.episode_id ? formData : ep
    )
    localStorage.setItem('episodes', JSON.stringify(updated))
    setDataset(updated)
    alert('Episode updated successfully!')
    setIsEditable(false)
    setFormData({
      episode_id: '',
      episode_name: '',
      episode_image: '',
      description: '',
      duration: '',
      release_date: ''
    })
  }

  return (
    <div className="update_area">
      <h2>Update Episode</h2>

      <input
        type="text"
        name="episode_id"
        value={formData.episode_id}
        onChange={handleChange}
        placeholder="Enter Episode ID"
        required
      />
      <button onClick={handleEpisodeIDCheck}>Load Episode</button>

      {isEditable && (
        <form className="update_form" onSubmit={handleUpdate}>
          {Object.entries(formData)
            .filter(([key]) => key !== 'episode_id')
            .map(([key, value]) => (
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
          <button type="submit">Update Episode</button>
        </form>
      )}
    </div>
  )
}

export default Update

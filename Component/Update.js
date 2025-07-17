"use client";
import React, { useState } from "react";

const Update = () => {
  const [formData, setFormData] = useState({
    episode_id: "",
    episode_name: "",
    episode_image: "",
    description: "",
    duration: "",
    release_date: "",
  });

  const [isEditable, setIsEditable] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleEpisodeIDCheck = async (e) => {
    e.preventDefault();

    const res = await fetch("/dataSet.json"); 
    const episodes = await res.json();
    const episode = episodes.find(
      (ep) => ep.episode_id === formData.episode_id
    );

    if (episode) {
      setFormData(episode);
      setIsEditable(true);
    } else {
      alert("Episode ID not found!");
      setIsEditable(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/episodes", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (res.ok) {
      alert("Episode updated successfully!");
      setIsEditable(false);
      setFormData({
        episode_id: "",
        episode_name: "",
        episode_image: "",
        description: "",
        duration: "",
        release_date: "",
      });
    } else {
      alert(result.error || "Update failed");
    }
  };

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
          <input
            type="text"
            name="episode_name"
            value={formData.episode_name}
            onChange={handleChange}
            placeholder="Episode Name"
            required
          />
          <input
            type="text"
            name="episode_image"
            value={formData.episode_image}
            onChange={handleChange}
            placeholder="Image URL"
            required
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Duration"
            required
          />
          <input
            type="text"
            name="release_date"
            value={formData.release_date}
            onChange={handleChange}
            placeholder="Release Date"
            required
          />
          <button type="submit">Update Episode</button>
        </form>
      )}
    </div>
  );
};

export default Update;

"use client";
import React, { useState, useEffect } from "react";

const Create = () => {
  const [dataset, setDataset] = useState([]);
  const [formData, setFormData] = useState({
    episode_id: "",
    episode_name: "",
    episode_image: "",
    description: "",
    duration: "",
    release_date: "",
  });

  useEffect(() => {
    fetch("/dataSet.json")
      .then((res) => res.json())
      .then((data) => setDataset(data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/episodes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Episode added!");
    } else {
      alert("Failed to add episode");
    }
  };

  return (
    <div>
      <center>
        <h2>Create Blog</h2>
      </center>

      <form onSubmit={handleSubmit} className="create_form">
        <input
          type="text"
          name="episode_id"
          value={formData.episode_id}
          onChange={handleChange}
          placeholder="Episode ID"
          required
        />
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
          placeholder="Release date"
          required
        />
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default Create;

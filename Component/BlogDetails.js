"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import BlogBox from "./BlogBox";
import defaultDataset from "./defaultDataset";

const BlogDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [item, setItem] = useState(null);

  useEffect(() => {
    // Get from localStorage or fallback to default
    const localData = JSON.parse(localStorage.getItem("episodes")) || defaultDataset;
    const foundItem = localData.find((ep) => ep.episode_id == id);
    setItem(foundItem);
  }, [id]);

  return (
    <div className="details_area">
      {item ? (
        <BlogBox
          episode_id={item.episode_id}
          episode_name={item.episode_name}
          episode_image={item.episode_image}
          description={item.description}
          duration={item.duration}
          release_date={item.release_date}
          router=""
        />
      ) : (
        <h2>No episode found for ID {id}</h2>
      )}
    </div>
  );
};

export default BlogDetails;

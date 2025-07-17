"use client";
import React, { useEffect, useState } from "react";
import BlogBox from "./BlogBox";
import { useRouter } from "next/navigation";
import defaultDataset from "./defaultDataset"; 

const Display = () => {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("episodes")) || defaultDataset;
    setData(storedData);
  }, []);

  return (
    <div className="blog_area">
      {data.map((item, index) => (
        <BlogBox
          key={index}
          episode_id={item.episode_id}
          episode_name={item.episode_name}
          episode_image={item.episode_image}
          description={item.description}
          duration={item.duration}
          release_date={item.release_date}
          router={router}
        />
      ))}
    </div>
  );
};

export default Display;

"use client";

import { useSearchParams } from "next/navigation";
import data from "@/public/dataSet.json";
import React from "react";
import BlogBox from "./BlogBox";

const BlogDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const item = data.find((item) => item.episode_id == id);

  return (
    <div className="details_area">
      {item ? (
        <>
          <BlogBox
            episode_id={item.episode_id}
            episode_name={item.episode_name}
            episode_image={item.episode_image}
            description={item.description}
            duration={item.duration}
            release_date={item.release_date}
            router=""
          />
        </>
      ) : (
        <h2>No episode found for ID {id}</h2>
      )}
    </div>
  );
};

export default BlogDetails;

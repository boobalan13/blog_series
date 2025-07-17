import React from "react";

const BlogBox = ({
  episode_id,
  episode_name,
  episode_image,
  description,
  duration,
  release_date,
  router,
}) => {
  return (
    <div
      className="blog_box"
      onClick={() => {
        router.push(`details?id=${episode_id}`);
      }}
    >
      <img className="blog_ani_img" src={episode_image} alt="ndeje" />
      <div className="details_ani_box">
        <h1>{episode_name}</h1>
        <h3>{description}</h3>
        <h3>
          <span>Duration </span> : {duration}
        </h3>
        <h3>
          <span>Release</span> : {release_date}
        </h3>
      </div>
      <div className="btn_ani">
        <div></div>
        <button>View</button>
      </div>
    </div>
  );
};

export default BlogBox;

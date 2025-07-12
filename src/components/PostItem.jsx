import React, { useState } from 'react';

const PostItem = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleView = () => setExpanded(!expanded);

  return (
    <div className="col-md-6 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">
            {expanded ? post.body : post.body.slice(0, 100) + "..."}
          </p>
          <button className="btn btn-outline-primary btn-sm" onClick={toggleView}>
            {expanded ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
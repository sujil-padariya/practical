import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from './PostItem';
import Spinner from './Spinner';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        className="form-control mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? <Spinner /> : (
        <div className="row">
          {filteredPosts.slice(0, visibleCount).map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      )}

      {visibleCount < filteredPosts.length && (
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={() => setVisibleCount(prev => prev + 6)}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PostList;
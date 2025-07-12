import React from 'react';
import PostList from './components/PostList';

const App = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">📘 Blog Post Viewer</h1>
      <PostList />
    </div>
  );
};

export default App;
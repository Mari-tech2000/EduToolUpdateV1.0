import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogHome = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from database and set to state
    // Example: firestore.collection('posts').get().then(...)
    // setBlogPosts(posts);
  }, []);

  return (
    <div>
      <h2>Recent Blog Posts</h2>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogHome;
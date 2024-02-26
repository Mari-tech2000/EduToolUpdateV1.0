import React, { useState } from 'react';

const EditBlog = ({ match }) => {
  const postId = match.params.id;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update blog post in database
    // Example: firestore.collection('posts').doc(postId).update({ title, content })
  };

  return (
    <div>
      <h2>Edit Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
}

export default EditBlog;
import React from 'react';

const BlogPost = ({ match }) => {
  const postId = match.params.id;
  // Fetch blog post details using postId from database
  // Example: firestore.collection('posts').doc(postId).get().then(...)
  // const post = fetchedPost.data();
  
  // Example usage:
  // const { title, content, author } = post;

  return (
    <div>
      {/* Display post details */}
      {/* <h2>{title}</h2>
      <p>{content}</p>
      <p>By: {author}</p> */}
    </div>
  );
}

export default BlogPost;
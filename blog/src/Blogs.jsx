import React from 'react';
import Blog from './Blog';

const Blogs = ({ blogs, handleDelete}) => {
  const blogList = Object.values(blogs).map( blog => (
    <li key={blog.id}>
      <Blog blog={blog} />
      <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
    </li>
  ));
  return (
    <ul className="blog">
      {blogList}
    </ul>
  );
};

export default Blogs;


import React from 'react';

const Blog = ({ blog }) => {
  return (
    <div className="message">
      <div className="meta-info">
        <div className="sender-info">
          <span className="username">{blog.sender}</span>
        </div>
        <div className="message-info">
          <span className="title">{blog.title}</span>
          <span className="timestamp">{blog.timestamp.toString()}</span>
        </div>
      </div>
      <div className="message-text">{blog.text}</div>
    </div>
  );
};

export default Blog;

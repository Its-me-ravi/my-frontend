// src/components/Posts/PostList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts',);
        setPosts(Array.isArray(res.data) ? res.data : []); 
      } catch (error) {
        console.error(error.response.data);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">All Posts</h1>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts available.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <li
                key={post._id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <small className="block text-gray-500">Posted by: {post.user.username}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PostList;

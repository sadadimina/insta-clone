import React, { useState } from 'react';
import { PostCard } from './PostCard';
import { usePosts } from '../hooks/posts.hook';
import Loading from './Loading';
import Modal from './Modal';
import axios from 'axios';

function Posts() {
  const { users, posts, loading, setPosts } = usePosts(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSavePost = async (newPost) => {
    try {
      const response = await axios.post('http://localhost:3000/posts', newPost);
      const createdPost = response.data;
      setPosts([...posts, createdPost]);
      console.log('Post sent sucsessfully!!', createdPost);
    } catch (error) {
      console.error('Post can not create!', error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        {posts.map((post) => {
          const user = users.find((u) => u.id === +post.userId);
          return (
            <PostCard
              key={post.id}
              caption={post.caption}
              imageUrl={post.imageUrl}
              userName={user ? `${user.firstName} ${user.lastName}` : 'Unknown'}
              postId={post.id}
            />
          );
        })}
      </div>

      <button
        className="fixed bottom-6 right-6 bg-indigo-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-3xl hover:bg-indigo-600 transition duration-200"
        onClick={() => setIsModalOpen(true)}
      >
        +
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePost}
      />
    </>
  );
}

export default Posts;

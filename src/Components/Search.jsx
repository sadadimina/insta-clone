import { useState } from 'react';
import axios from 'axios';
import { PostCard } from './PostCard';
import { usePosts } from '../hooks/posts.hook';
import React from 'react';
import Loading from './Loading';

export default function Search() {
  const shouldInit = false;
  const { users, posts, loading, searchTerm, handleSearch, setSearchTerm } =
    usePosts(shouldInit);

  return (
    <div className="flex flex-col items-center mt-32 px-4">
      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search by caption..."
          className="border rounded px-4 py-2 w-72"
        />
        <button
          onClick={handleSearch}
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
        >
          Search
        </button>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="w-full max-w-2xl flex flex-col items-center gap-4">
          {posts.map((post) => {
            const user = users.find((u) => u.id == post.userId);
            return (
              <PostCard
                key={post.id}
                caption={post.caption}
                imageUrl={post.imageUrl}
                userName={
                  user ? `${user.firstName} ${user.lastName}` : 'Unknown'
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from 'react';
import axios from 'axios';

export const usePosts = (shouldInit) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(shouldInit);

  const getUserPromise = () => axios.get('http://localhost:3000/users');

  const handleAllPromises = (postPromise, userPromise) => {
    setLoading(true);
    Promise.all([postPromise, userPromise])
      .then(([postsResponse, usersResponse]) => {
        setPosts(postsResponse.data);
        setUsers(usersResponse.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSearch = () => {
    const postPromise = axios.get(
      'http://localhost:3000/posts?caption_like=' + searchTerm
    );
    const userPromise = getUserPromise();
    handleAllPromises(postPromise, userPromise);
  };

  useEffect(() => {
    if (shouldInit) {
      const postPromise = axios.get('http://localhost:3000/posts');
      const userPromise = getUserPromise();
      handleAllPromises(postPromise, userPromise);
    }
  }, []);

  return {
    users,
    posts,
    searchTerm,
    loading,
    setPosts,
    setSearchTerm,
    handleSearch,
  };
};

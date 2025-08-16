import React, { useEffect, useState } from "react";
import axios from "axios";
import { PostCard } from "./PostCard";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((result) => setPosts(result.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default Posts;

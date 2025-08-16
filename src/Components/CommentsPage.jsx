import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CommentsPage() {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/comments?postId=${postId}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {comments.length === 0 && <p>No comments yet.</p>}
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}

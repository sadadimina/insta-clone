import { useNavigate } from 'react-router-dom';

export default function CommentButton({ postId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/comments/${postId}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md shadow-sm transition"
    >
      comments
    </button>
  );
}

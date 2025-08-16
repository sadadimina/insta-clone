import CommentButton from './CommentButton';
export function PostCard({ caption, imageUrl, userName, postId }) {
  return (
    <div className="max-w-md mx-auto my-6 bg-white rounded-xl shadow-md overflow-hidden border border-gray-300">
      <div className="p-4 border-b border-gray-200">
        <p className="text-sm text-gray-500">
          Posted by{' '}
          <span className="font-medium text-gray-700">{userName}</span>
        </p>
      </div>
      <img src={imageUrl} alt="Post" className="w-full object-cover h-80" />
      <div className="p-4">
        <CommentButton postId={postId} />

        <p className="text-lg font-semibold text-gray-800">{caption}</p>
      </div>
    </div>
  );
}

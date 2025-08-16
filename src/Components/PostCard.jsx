export function PostCard({ caption, imageUrl }) {
  return (
    <div className="max-w-md mx-auto my-6 bg-white rounded-xl shadow-md overflow-hidden border border-gray-300">
      <img src={imageUrl} alt="Post" className="w-full object-cover h-80" />
      <div className="p-4">
        <p className="text-lg font-semibold text-gray-800">{caption}</p>
      </div>
    </div>
  );
}

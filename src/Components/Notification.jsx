import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [notifRes, userRes] = await Promise.all([
          axios.get('http://localhost:3000/notifications'),
          axios.get('http://localhost:3000/users'),
        ]);
        setNotifications(notifRes.data);
        setUsers(userRes.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching notifications:', err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      {notifications.map((notif) => {
        const user = users.find((u) => u.id === notif.userId);

        return (
          <div
            key={notif.id}
            className="flex items-start gap-3 py-4 border-b border-gray-200"
          >
            <div className="w-8 h-8 flex justify-center items-center border rounded-full text-xl">
              👤
            </div>
            <div className="flex flex-col">
              <span className="font-semibold leading-none text-left">
                {user ? `${user.firstName} ${user.lastName}` : 'Unknown User'}
              </span>
              <span className="text-sm text-gray-500 mt-1 leading-tight">
                {notif.text}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

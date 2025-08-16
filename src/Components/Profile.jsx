import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthday: '',
  });

  useEffect(() => {
    axios
      .get('http://localhost:3000/profile')
      .then((res) => {
        setProfile(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('error', err);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    console.log('Save button clicked!');
    console.log('Sending data:', profile);

    try {
      const res = await axios.put('http://localhost:3000/profile', profile);
      console.log('Response:', res.data);
      alert('Saved successfully!');
    } catch (err) {
      console.error('Save error:', err);
      alert('Save failed!');
    } finally {
      setSaving(false);
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      <input
        type="text"
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        className="border rounded px-3 py-2"
        placeholder="First Name"
      />

      <input
        type="text"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        className="border rounded px-3 py-2"
        placeholder="Last Name"
      />

      <input
        type="email"
        value={profile.email}
        disabled
        className="border rounded px-3 py-2 bg-gray-100 text-gray-500"
        placeholder="Email"
      />

      <input
        type="date"
        value={profile.birthday}
        onChange={(e) => setProfile({ ...profile, birthday: e.target.value })}
        className="border rounded px-3 py-2"
        placeholder="Birthday"
      />

      <button
        onClick={handleSave}
        disabled={saving}
        className={`bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition ${
          saving ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {saving ? 'Saving...' : 'Save'}
      </button>
    </div>
  );
}

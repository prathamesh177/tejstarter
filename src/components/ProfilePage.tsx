import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    fetch('/api/auth/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(async res => {
        if (res.status === 401) {
          setError('Session expired. Please log in again.');
          setTimeout(() => navigate('/login'), 1500);
          return;
        }
        const data = await res.json();
        setUser(data);
      })
      .catch(() => {
        setError('Failed to load profile.');
      });
  }, [navigate]);

  if (loggingOut) return <Loader message="Logging out..." />;
  if (error) return <div className="text-red-600 font-bold text-center mt-10">{error}</div>;
  if (!user) return <div className="text-center mt-10">Loading profile...</div>;

  const handleLogout = async () => {
    setLoggingOut(true);
    const start = Date.now();
    try {
      await fetch('/api/auth/logout', { method: 'POST', headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    } catch {}
    localStorage.removeItem('token');
    const elapsed = Date.now() - start;
    setTimeout(() => navigate('/login'), Math.max(3000 - elapsed, 0));
  };

  let roleBlock = null;
  if (user.role === 'student') {
    roleBlock = (
      <div className="mt-4 p-4 bg-blue-50 rounded">
        <div className="font-semibold text-blue-700">Welcome, Student!</div>
        <div>Access opportunities, join collaborations, and connect with organizations.</div>
      </div>
    );
  } else if (user.role === 'organization') {
    roleBlock = (
      <div className="mt-4 p-4 bg-green-50 rounded">
        <div className="font-semibold text-green-700">Welcome, Organization!</div>
        <div>Post opportunities, find student talent, and partner with colleges.</div>
      </div>
    );
  } else if (user.role === 'college') {
    roleBlock = (
      <div className="mt-4 p-4 bg-yellow-50 rounded">
        <div className="font-semibold text-yellow-700">Welcome, College!</div>
        <div>Showcase your students, connect with industry, and foster collaborations.</div>
      </div>
    );
  }

  return (
    <div className="font-sans text-slate-700 bg-slate-50 min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col items-center py-12 min-h-[80vh]">
        <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
        <div className="bg-white p-8 rounded-lg shadow w-96">
          <div className="mb-4"><span className="font-semibold">Name:</span> {user.name}</div>
          <div className="mb-4"><span className="font-semibold">Email:</span> {user.email}</div>
          <div className="mb-4"><span className="font-semibold">Role:</span> {user.role}</div>
          {roleBlock}
          <button
            className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded w-full"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;

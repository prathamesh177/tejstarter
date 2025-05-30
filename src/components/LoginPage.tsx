import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };
    
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const start = Date.now();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
        setSuccess(true);
        const elapsed = Date.now() - start;
        setTimeout(() => navigate('/'), Math.max(4000 - elapsed, 0));
      } else {
        const elapsed = Date.now() - start;
        setTimeout(() => setLoading(false), Math.max(4000 - elapsed, 0));
        setError(data.msg || 'Login failed');
        return;
      }
    } catch (err) {
      const elapsed = Date.now() - start;
      setTimeout(() => setLoading(false), Math.max(4000 - elapsed, 0));
      setError('Login failed. Please try again.');
      return;
    }
    // Only set loading false if not navigating
    setTimeout(() => setLoading(false), 4000);

  };
  if (loading) return <Loader message="Logging in..." />;
  // if (success) return <div className="text-green-600 font-bold">Login successful! Redirecting to your profile...</div>;
  return (
    <div className="font-sans text-slate-700 bg-slate-50 min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col items-center py-12 min-h-[80vh]">
        <h1 className="text-3xl font-bold mb-6">Login to TEJSTARTER</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 bg-white p-8 rounded-lg shadow">
          <input name="email" required type="email" placeholder="Email" className="border rounded px-3 py-2" value={form.email} onChange={handleChange} />
          <input name="password" required type="password" placeholder="Password" className="border rounded px-3 py-2" value={form.password} onChange={handleChange} />
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button className="bg-primary-600 hover:bg-primary-700 text-white py-2 rounded mt-2">Login</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;

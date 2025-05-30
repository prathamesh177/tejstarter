import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const RegisterPage: React.FC = () => {
  const [role, setRole] = useState<'student' | 'organization' | 'college' | null>(null);

  return (
    <div className="font-sans text-slate-700 bg-slate-50 min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col items-center py-12 min-h-[80vh]">
        <h1 className="text-3xl font-bold mb-6">Register for TEJSTARTER</h1>
        {!role && (
          <div className="flex gap-6 mb-8">
            <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg" onClick={() => setRole('student')}>Student</button>
            <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg" onClick={() => setRole('organization')}>Organization</button>
            <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg" onClick={() => setRole('college')}>College</button>
          </div>
        )}
        {role === 'student' && <StudentRegistrationForm />}
        {role === 'organization' && <OrganizationRegistrationForm />}
        {role === 'college' && <CollegeRegistrationForm />}
      </main>
      <Footer />
    </div>
  );
};

function StudentRegistrationForm() {
  return <RegistrationForm role="student" />;
}
function OrganizationRegistrationForm() {
  return <RegistrationForm role="organization" />;
}
function CollegeRegistrationForm() {
  return <RegistrationForm role="college" />;
}

import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

function RegistrationForm({ role }: { role: string }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const start = Date.now();
    try {
      const res = await fetch(`/api/auth/register/${role}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.status === 409) {
        setError('User already exists. Redirecting to login...');
        const elapsed = Date.now() - start;
        setTimeout(() => navigate('/login'), Math.max(4000 - elapsed, 0));
        return;
      }
      const data = await res.json();
      if (res.ok && data.redirectToLogin) {
        setSuccess(true);
        const elapsed = Date.now() - start;
        setTimeout(() => navigate('/login'), Math.max(4000 - elapsed, 0));
      } else {
        const elapsed = Date.now() - start;
        setTimeout(() => setLoading(false), Math.max(4000 - elapsed, 0));
        setError(data.msg || 'Registration failed');
        return;
      }
    } catch (err) {
      const elapsed = Date.now() - start;
      setTimeout(() => setLoading(false), Math.max(4000 - elapsed, 0));
      setError('Registration failed. Please try again.');
      return;
    }
    setTimeout(() => setLoading(false), 4000);

  };
  if (loading) return <Loader message="Registering..." />;
  if (success) return <div className="text-green-600 font-bold">Registration successful! Redirecting to login...</div>;
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 bg-white p-8 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2 capitalize">{role} Registration</h2>
      <input name="name" required placeholder="Name" className="border rounded px-3 py-2" value={form.name} onChange={handleChange} />
      <input name="email" required type="email" placeholder="Email" className="border rounded px-3 py-2" value={form.email} onChange={handleChange} />
      <input name="password" required type="password" placeholder="Password" className="border rounded px-3 py-2" value={form.password} onChange={handleChange} />
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <button className="bg-primary-600 hover:bg-primary-700 text-white py-2 rounded mt-2">Register</button>
    </form>
  );
}

export default RegisterPage;

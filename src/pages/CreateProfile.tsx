import { useState } from 'react';
import { UserCircle, Phone, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateProfile = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      alert('Profile Created Successfully!');
      navigate('/profile');
    }
  };

  return (
    <div className="animate-fade-in flex items-center justify-center" style={{ minHeight: 'calc(100vh - 10rem)' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', padding: '2.5rem' }}>
        <div className="text-center mb-8">
          <UserCircle size={48} className="text-primary mx-auto mb-4" />
          <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Complete Your Profile</h1>
          <p className="text-muted">Tell us a bit more about yourself to get started.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label">Full Name</label>
            <div style={{ position: 'relative' }}>
              <UserCircle size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input 
                type="text" 
                className="input-field" 
                style={{ paddingLeft: '3rem' }}
                placeholder="John Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
          </div>
          <div className="input-group">
            <label className="input-label">Phone Number</label>
            <div style={{ position: 'relative' }}>
              <Phone size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input 
                type="tel" 
                className="input-field" 
                style={{ paddingLeft: '3rem' }}
                placeholder="+91 99999 99999" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required 
              />
            </div>
          </div>
          <div className="input-group mb-6">
            <label className="input-label">Playing Preference</label>
            <div className="flex gap-4 mt-2">
              <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', background: 'var(--color-primary)', borderRadius: 'var(--radius-md)', color: 'white', flex: 1, justifyContent: 'center', fontWeight: 'bold' }}>
                Cricket Player 🏏
              </div>
            </div>
          </div>
          
          <button className="btn btn-primary btn-block mt-4">
            Save Profile <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;

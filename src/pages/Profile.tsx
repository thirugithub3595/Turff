import { useState } from 'react';
import { User, Phone, Save, LogOut } from 'lucide-react';

const Profile = () => {
  const [name, setName] = useState('Alex Cricketer');
  const [phone, setPhone] = useState('+91 98765 43210');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profile saved!');
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
      <h1 className="mb-8">My Profile</h1>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="glass-panel" style={{ padding: '2rem', gridColumn: 'span 1' }}>
          <div className="text-center">
            <div style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%', 
              background: 'var(--color-primary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: 'white'
            }}>
              {name.charAt(0)}
            </div>
            <h3 style={{ marginBottom: '0.25rem' }}>{name}</h3>
            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '0.875rem' }}>user@example.com</p>
            <button className="btn btn-outline btn-block text-danger" style={{ borderColor: 'var(--color-danger)', color: 'var(--color-danger)' }}>
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', gridColumn: 'span 2' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Personal Information</h2>
          <form onSubmit={handleSave}>
            <div className="input-group">
              <label className="input-label">Full Name</label>
              <div style={{ position: 'relative' }}>
                <User size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                <input 
                  type="text" 
                  className="input-field" 
                  style={{ paddingLeft: '3rem' }}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required 
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-4">
              <Save size={18} /> Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

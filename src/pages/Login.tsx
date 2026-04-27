import { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, Lock } from 'lucide-react';

const Login = () => {
  const [role, setRole] = useState<'user' | 'admin'>('user');
  const [step, setStep] = useState<'email' | 'otp' | 'password'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'admin') {
      setStep('password');
    } else if (email) {
      setNotification(`Mail sent to ${email} (Demo OTP: 123456)`);
      setStep('otp');
      setTimeout(() => setNotification(null), 5000);
    }
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'admin') {
      if (password === 'admin123') {
        window.location.href = '/admin';
      } else {
        setNotification('Invalid password! (Try: admin123)');
        setTimeout(() => setNotification(null), 3000);
      }
    } else {
      if (otp === '123456') {
        window.location.href = '/create-profile';
      } else {
        setNotification('Invalid OTP. Please enter 123456.');
        setTimeout(() => setNotification(null), 3000);
      }
    }
  };

  return (
    <div className="animate-fade-in flex items-center justify-center" style={{ minHeight: 'calc(100vh - 10rem)' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '450px', padding: '2.5rem' }}>
        
        <div className="flex bg-slate-800/50 rounded-lg p-1 mb-8" style={{ background: 'rgba(15, 23, 42, 0.5)', borderRadius: '0.5rem', padding: '0.25rem' }}>
          <button 
            type="button"
            className={`flex-1 py-2 rounded-md font-bold text-sm transition-all ${role === 'user' ? 'bg-primary text-white shadow-md' : 'text-muted'}`}
            style={{ background: role === 'user' ? 'var(--color-primary)' : 'transparent', color: role === 'user' ? '#fff' : 'var(--color-text-muted)', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
            onClick={() => { setRole('user'); setStep('email'); }}
          >
            USER LOGIN
          </button>
          <button 
            type="button"
            className={`flex-1 py-2 rounded-md font-bold text-sm transition-all ${role === 'admin' ? 'bg-primary text-white shadow-md' : 'text-muted'}`}
            style={{ background: role === 'admin' ? 'var(--color-primary)' : 'transparent', color: role === 'admin' ? '#fff' : 'var(--color-text-muted)', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
            onClick={() => { setRole('admin'); setStep('email'); }}
          >
            ADMIN LOGIN
          </button>
        </div>

        <div className="text-center mb-8">
          <ShieldCheck size={48} className="text-primary mx-auto mb-4" />
          <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
            {step === 'email' ? (role === 'admin' ? 'Admin Portal' : 'Welcome Back') : (step === 'otp' ? 'Enter OTP' : 'Admin Password')}
          </h1>
          <p className="text-muted">
            {step === 'email' 
              ? 'Enter your email to proceed.' 
              : (step === 'otp' ? `We sent a 6-digit code to ${email}` : 'Enter your admin password')}
          </p>
        </div>

        {notification && (
          <div style={{ background: 'rgba(59, 130, 246, 0.2)', border: '1px solid var(--color-accent)', color: 'var(--color-text-main)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', textAlign: 'center', animation: 'fadeIn 0.3s' }}>
            {notification}
          </div>
        )}

        {step === 'email' ? (
          <form onSubmit={handleEmailSubmit}>
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                <input 
                  type="email" 
                  className="input-field" 
                  style={{ paddingLeft: '3rem' }}
                  placeholder={role === 'admin' ? "admin@turfmaster.com" : "you@example.com"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
            </div>
            <button className="btn btn-primary btn-block mt-4">
              Continue <ArrowRight size={18} />
            </button>
          </form>
        ) : (
          <form onSubmit={handleAuthSubmit}>
            <div className="input-group">
              <label className="input-label">{step === 'password' ? 'Password' : '6-Digit Code'}</label>
              
              {step === 'password' ? (
                <div style={{ position: 'relative' }}>
                  <Lock size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                  <input 
                    type="password" 
                    className="input-field" 
                    style={{ paddingLeft: '3rem' }}
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
              ) : (
                <input 
                  type="text" 
                  className="input-field" 
                  style={{ textAlign: 'center', fontSize: '1.5rem', letterSpacing: '0.25em' }}
                  placeholder="000000" 
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required 
                />
              )}
            </div>
            <button className="btn btn-primary btn-block mt-4">
              Verify & Login
            </button>
            <div className="text-center mt-6">
              <button 
                type="button" 
                className="text-accent" 
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem' }}
                onClick={() => setStep('email')}
              >
                Change Email Address
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;

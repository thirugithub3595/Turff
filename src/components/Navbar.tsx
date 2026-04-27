import { Link, useLocation } from 'react-router-dom';
import { Calendar, LogIn, Trophy } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container" style={{ 
        height: '4rem', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Trophy className="text-primary" size={28} />
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '1px' }}>
            Turf<span className="text-primary">Master</span>
          </span>
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link to="/" style={{ color: location.pathname === '/' ? 'var(--color-primary)' : 'var(--color-text-main)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Calendar size={18} />
              <span className="hidden sm:inline">Bookings</span>
            </div>
          </Link>
          <Link to="/login" className="btn btn-outline" style={{ padding: '0.4rem 1rem' }}>
            <LogIn size={16} />
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

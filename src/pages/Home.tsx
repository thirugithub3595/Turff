import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';

const MOCK_TURFS = [
  { id: 1, name: 'Vadapalani Sports Arena', location: 'Vadapalani, Chennai', rating: 4.8, price: 1200, sports: ['Cricket'], image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800', map: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Vadapalani,%20Chennai&t=&z=14&ie=UTF8&iwloc=B&output=embed" },
  { id: 2, name: 'ECR Turf Club', location: 'ECR, Chennai', rating: 4.5, price: 900, sports: ['Cricket'], image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800', map: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=ECR,%20Chennai&t=&z=14&ie=UTF8&iwloc=B&output=embed" },
  { id: 3, name: 'Tambaram Main Pitch', location: 'Tambaram, Chennai', rating: 4.9, price: 1500, sports: ['Cricket'], image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=800&q=80', map: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Tambaram,%20Chennai&t=&z=14&ie=UTF8&iwloc=B&output=embed" },
];

const Home = () => {
  return (
    <div className="animate-fade-in">
      <section style={{ textAlign: 'center', padding: '4rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <h1 style={{ fontSize: '3.5rem', background: 'linear-gradient(to right, var(--color-primary-light), var(--color-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Book Your Perfect Match
        </h1>
        <p className="text-muted" style={{ maxWidth: '600px', fontSize: '1.125rem', lineHeight: '1.6' }}>
          Discover and book the best turfs in your area. Monthly slots, secure bookings, and an integrated real-time match scorecard.
        </p>
        <a href="#turfs" className="btn btn-primary mt-4" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
          Explore Venues
        </a>
      </section>

      <section id="turfs" style={{ padding: '4rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem' }}>Available Turfs</h2>
            <p className="text-muted">Find the perfect spot for your next game</p>
          </div>
        </div>

        <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
          {MOCK_TURFS.map(turf => (
            <div key={turf.id} className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform var(--transition-normal)' }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img src={turf.image} alt={turf.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ fontSize: '1.25rem' }}>{turf.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#fbbf24', fontWeight: 'bold' }}>
                    <Star size={16} fill="currentColor" /> {turf.rating}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                  <MapPin size={16} /> {turf.location}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                  {turf.sports.map(sport => (
                    <span key={sport} style={{ background: 'rgba(59, 130, 246, 0.2)', color: 'var(--color-primary)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                      {sport}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>
                    ₹{turf.price}<span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', fontWeight: 'normal' }}> / hour</span>
                  </div>
                  <Link to={`/book/${turf.id}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Book Now</Link>
                </div>
                <div style={{ marginTop: '1rem', width: '100%', height: '150px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <iframe width="100%" height="100%" frameBorder="0" scrolling="no" src={turf.map}></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

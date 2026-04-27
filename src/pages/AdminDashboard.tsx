import { LayoutDashboard, Users, CreditCard, CalendarCheck, CheckCircle, Clock } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      <div className="flex items-center gap-4 mb-8 border-b pb-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <LayoutDashboard size={32} className="text-primary" />
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0' }}>Admin Dashboard</h1>
          <p className="text-muted">Overview of operations and live status</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '4px solid var(--color-primary)' }}>
          <div className="text-muted mb-2 font-bold text-sm">TOTAL REVENUE (TODAY)</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>₹14,500</div>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '4px solid var(--color-accent)' }}>
          <div className="text-muted mb-2 font-bold text-sm">ACTIVE SLOTS BOOKED</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>8 / 24</div>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '4px solid #fbbf24' }}>
          <div className="text-muted mb-2 font-bold text-sm">TEAMS CURRENTLY PLAYING</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>3</div>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem', borderTop: '4px solid var(--color-danger)' }}>
          <div className="text-muted mb-2 font-bold text-sm">PENDING PAYMENTS</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>₹2,400</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          {/* Currently Playing */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 className="flex items-center gap-2 mb-4 border-b pb-2" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <Users className="text-accent" /> Currently Playing Teams
            </h3>
            <div className="flex flex-col gap-4">
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)' }}>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-primary">Vadapalani Arena</span>
                  <span className="text-muted"><Clock size={14} className="inline mr-1"/> Ends in 45m</span>
                </div>
                <div>Super Kings vs City Strikers (Cricket)</div>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)' }}>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-primary">ECR Turf Club</span>
                  <span className="text-muted"><Clock size={14} className="inline mr-1"/> Ends in 15m</span>
                </div>
                <div>Beach Boys CC vs Wave Riders (Cricket)</div>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)' }}>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-primary">Tambaram Pitch</span>
                  <span className="text-muted"><Clock size={14} className="inline mr-1"/> Ends in 1h 20m</span>
                </div>
                <div>Tambaram Titans vs South Blasters (Cricket)</div>
              </div>
            </div>
          </div>

          {/* Payment Status */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 className="flex items-center gap-2 mb-4 border-b pb-2" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <CreditCard className="text-primary" /> Recent Payments Status
            </h3>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead>
                <tr className="text-muted border-b" style={{ borderColor: 'rgba(255,255,255,0.1)', fontSize: '0.875rem' }}>
                  <th className="pb-2">User</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <td className="py-3">Rahul S.</td><td className="py-3">₹1200</td><td className="py-3 text-primary"><CheckCircle size={16} className="inline mr-1"/> Paid</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <td className="py-3">Manoj K.</td><td className="py-3">₹900</td><td className="py-3 text-danger"><Clock size={16} className="inline mr-1"/> Due</td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <td className="py-3">Sunil V.</td><td className="py-3">₹1500</td><td className="py-3 text-danger"><Clock size={16} className="inline mr-1"/> Due</td>
                </tr>
                <tr>
                  <td className="py-3">Vikram D.</td><td className="py-3">₹1500</td><td className="py-3 text-primary"><CheckCircle size={16} className="inline mr-1"/> Paid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* Booking Overview */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 className="flex items-center gap-2 mb-4 border-b pb-2" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <CalendarCheck className="text-primary" /> Today's Bookings Overview
            </h3>
            <div className="flex flex-col gap-2 relative">
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)' }} className="flex justify-between items-center">
                <span>Vadapalani: 10AM - 12PM</span> <span className="text-primary font-bold text-sm">CONFIRMED</span>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)' }} className="flex justify-between items-center">
                <span>ECR Club: 12PM - 2PM</span> <span className="text-primary font-bold text-sm">CONFIRMED</span>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.2)', borderRadius: 'var(--radius-sm)' }} className="flex justify-between items-center text-muted">
                <span>Tambaram: 2PM - 4PM</span> <span className="text-sm">AVAILABLE</span>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.2)', borderRadius: 'var(--radius-sm)' }} className="flex justify-between items-center text-muted">
                <span>Vadapalani: 4PM - 6PM</span> <span className="text-sm">AVAILABLE</span>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)' }} className="flex justify-between items-center">
                <span>ECR Club: 6PM - 8PM</span> <span className="text-danger font-bold text-sm">PENDING</span>
              </div>
            </div>
            <button className="btn btn-outline btn-block mt-4">View Global Calendar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

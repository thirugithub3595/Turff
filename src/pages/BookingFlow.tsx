import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar as CalendarIcon, Clock, CheckCircle } from 'lucide-react';

const BookingFlow = () => {

  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<number | null>(5); // Mock selected date (e.g. 5th)
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isPaying, setIsPaying] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Mock days for April
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
  const timeSlots = [
    '06:00 AM - 08:00 AM',
    '08:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 02:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM',
    '06:00 PM - 08:00 PM',
    '08:00 PM - 10:00 PM',
    '10:00 PM - 11:00 PM'
  ];

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setIsPaying(true);
    }
  };

  const handlePayment = () => {
    setIsConfirmed(true);
    // Simulate sending email and redirecting to scorecard after short delay
    setTimeout(() => {
      navigate('/scorecard');
    }, 3000);
  };

  if (isPaying && !isConfirmed) {
    return (
      <div className="animate-fade-in flex flex-col items-center justify-center text-center" style={{ minHeight: '60vh' }}>
        <h1 className="mb-4">Select Payment Method</h1>
        <p className="text-muted mb-8 text-lg" style={{ maxWidth: '500px' }}>
          You are booking a <strong className="text-primary">Cricket</strong> slot on <strong className="text-primary">April {selectedDate}th</strong> for <strong>{selectedTime}</strong>.<br/><br/>
          Total Amount: <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>₹1200</span>
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '350px', margin: '0 auto' }}>
          <button 
            className="btn btn-primary" 
            style={{ padding: '1rem', fontSize: '1.125rem', background: '#3b82f6', border: 'none', boxShadow: 'none' }} 
            onClick={() => handlePayment()}
          >
            Pay with Google Pay
          </button>
          <button 
            className="btn btn-outline" 
            style={{ padding: '1rem', fontSize: '1.125rem' }} 
            onClick={() => handlePayment()}
          >
            Credit / Debit Card
          </button>
          <button 
            className="text-muted mt-4 font-bold cursor-pointer hover:text-white"
            style={{ border: 'none', background: 'none', textDecoration: 'underline' }}
            onClick={() => setIsPaying(false)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (isConfirmed) {
    return (
      <div className="animate-fade-in flex flex-col items-center justify-center text-center" style={{ minHeight: '60vh' }}>
        <CheckCircle size={80} className="text-primary mb-6" />
        <h1 className="mb-4">Booking Confirmed!</h1>
        <p className="text-muted mb-8 text-lg" style={{ maxWidth: '500px' }}>
          Your Cricket slot on April {selectedDate}th for {selectedTime} has been successfully booked. 
          We have sent the confirmation to your email along with the special match scorecard link!
        </p>
        <div style={{ padding: '1.5rem', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid var(--color-accent)', borderRadius: 'var(--radius-md)', color: 'var(--color-accent)' }}>
          Redirecting to Match Control Center...
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in mb-8">
      <h1 className="mb-2">Book Your Cricket Slot</h1>
      <p className="text-muted mb-8">Select a date and time to reserve the turf.</p>

      <div className="grid grid-cols-2 gap-8">
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div className="flex items-center gap-2 mb-6 text-primary font-bold text-lg">
            <CalendarIcon /> April 2026
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="text-muted font-bold mb-2">{day}</div>
            ))}
            {/* Empty slots for start of month */}
            <div /><div /><div />
            {daysInMonth.map(day => (
              <button 
                key={day}
                onClick={() => setSelectedDate(day)}
                style={{ 
                  aspectRatio: '1', 
                  borderRadius: 'var(--radius-sm)', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: selectedDate === day ? 'var(--color-primary)' : 'transparent',
                  color: selectedDate === day ? 'white' : 'var(--color-text-main)',
                  fontWeight: selectedDate === day ? 'bold' : 'normal',
                  cursor: 'pointer'
                }}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <div className="flex items-center gap-2 mb-6 text-primary font-bold text-lg">
            <Clock /> Available Times
          </div>
          {selectedDate ? (
            <div className="flex flex-col gap-4">
              {timeSlots.map(time => (
                <button 
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`btn ${selectedTime === time ? 'btn-primary' : 'btn-outline'}`}
                  style={{ justifyContent: 'flex-start', padding: '1rem' }}
                >
                  {time}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center flex-1 text-muted">
              Select a date first
            </div>
          )}

          <div className="mt-auto pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <button 
              className="btn btn-primary btn-block" 
              disabled={!selectedDate || !selectedTime}
              onClick={handleBooking}
              style={{ fontSize: '1.25rem', padding: '1rem' }}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingFlow;

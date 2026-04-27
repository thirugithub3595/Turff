import { useState } from 'react';
import { Trophy, Plus, Save } from 'lucide-react';

const MatchScorecard = () => {
  const [teamA, setTeamA] = useState('Team A');
  const [teamB, setTeamB] = useState('Team B');

  // Cricket State
  const [scoreA, setScoreA] = useState('0/0 (0.0)');
  const [scoreB, setScoreB] = useState('0/0 (0.0)');
  const [batsmen, setBatsmen] = useState([
    { name: 'Player 1', runs: 0, balls: 0 },
    { name: 'Player 2', runs: 0, balls: 0 }
  ]);
  const [bowlers, setBowlers] = useState([
    { name: 'Bowler 1', overs: 0, runs: 0, wickets: 0 }
  ]);

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      <div className="text-center mb-8">
        <Trophy className="text-accent mx-auto mb-4" size={48} />
        <h1>Cricket Match Dashboard</h1>
        <p className="text-muted">Live Scoring & Control Center</p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="glass-panel text-center" style={{ padding: '2rem', background: 'linear-gradient(to bottom right, rgba(15, 23, 42, 0.9), rgba(59, 130, 246, 0.1))' }}>
          <input 
            value={teamA} 
            onChange={(e) => setTeamA(e.target.value)}
            className="input-field mb-2"
            style={{ textAlign: 'center', background: 'transparent', border: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}
          />
          <input 
            value={scoreA}
            onChange={(e) => setScoreA(e.target.value)}
            className="input-field"
            style={{ textAlign: 'center', background: 'transparent', border: 'none', fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}
          />
        </div>
        <div className="glass-panel text-center" style={{ padding: '2rem', background: 'linear-gradient(to bottom right, rgba(15, 23, 42, 0.9), rgba(239, 68, 68, 0.1))' }}>
          <input 
            value={teamB} 
            onChange={(e) => setTeamB(e.target.value)}
            className="input-field mb-2"
            style={{ textAlign: 'center', background: 'transparent', border: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}
          />
          <input 
            value={scoreB}
            onChange={(e) => setScoreB(e.target.value)}
            className="input-field"
            style={{ textAlign: 'center', background: 'transparent', border: 'none', fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-danger)' }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex justify-between items-center mb-4 border-b pb-2" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <h3 className="text-primary font-bold">Batsmen</h3>
            <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }} onClick={() => setBatsmen([...batsmen, { name: 'New Player', runs: 0, balls: 0 }])}><Plus size={14}/> Add</button>
          </div>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr className="text-muted" style={{ fontSize: '0.875rem' }}>
                <th className="pb-2">Batsman</th>
                <th className="pb-2 text-center">R</th>
                <th className="pb-2 text-center">B</th>
                <th className="pb-2 text-center">SR</th>
              </tr>
            </thead>
            <tbody>
              {batsmen.map((b, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="py-2"><input value={b.name} onChange={(e)=> {let n = [...batsmen]; n[i].name = e.target.value; setBatsmen(n)}} className="input-field" style={{ padding: '0.25rem', height: 'auto', background: 'transparent', border: 'none' }} /></td>
                  <td className="text-center"><input type="number" value={b.runs} onChange={(e)=> {let n = [...batsmen]; n[i].runs = Number(e.target.value); setBatsmen(n)}} className="input-field" style={{ width: '50px', padding: '0.25rem', textAlign: 'center' }} /></td>
                  <td className="text-center"><input type="number" value={b.balls} onChange={(e)=> {let n = [...batsmen]; n[i].balls = Number(e.target.value); setBatsmen(n)}} className="input-field" style={{ width: '50px', padding: '0.25rem', textAlign: 'center' }} /></td>
                  <td className="text-center text-muted text-sm">{b.balls > 0 ? ((b.runs / b.balls) * 100).toFixed(1) : '0.0'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex justify-between items-center mb-4 border-b pb-2" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <h3 className="text-danger font-bold">Bowlers</h3>
            <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }} onClick={() => setBowlers([...bowlers, { name: 'New Bowler', overs: 0, runs: 0, wickets: 0 }])}><Plus size={14}/> Add</button>
          </div>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr className="text-muted" style={{ fontSize: '0.875rem' }}>
                <th className="pb-2">Bowler</th>
                <th className="pb-2 text-center">O</th>
                <th className="pb-2 text-center">R</th>
                <th className="pb-2 text-center">W</th>
                <th className="pb-2 text-center">ECO</th>
              </tr>
            </thead>
            <tbody>
              {bowlers.map((b, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="py-2"><input value={b.name} onChange={(e)=> {let n = [...bowlers]; n[i].name = e.target.value; setBowlers(n)}} className="input-field" style={{ padding: '0.25rem', height: 'auto', background: 'transparent', border: 'none' }} /></td>
                  <td className="text-center"><input type="number" value={b.overs} onChange={(e)=> {let n = [...bowlers]; n[i].overs = Number(e.target.value); setBowlers(n)}} className="input-field" style={{ width: '50px', padding: '0.25rem', textAlign: 'center' }} /></td>
                  <td className="text-center"><input type="number" value={b.runs} onChange={(e)=> {let n = [...bowlers]; n[i].runs = Number(e.target.value); setBowlers(n)}} className="input-field" style={{ width: '50px', padding: '0.25rem', textAlign: 'center' }} /></td>
                  <td className="text-center"><input type="number" value={b.wickets} onChange={(e)=> {let n = [...bowlers]; n[i].wickets = Number(e.target.value); setBowlers(n)}} className="input-field" style={{ width: '50px', padding: '0.25rem', textAlign: 'center' }} /></td>
                  <td className="text-center text-muted text-sm">{b.overs > 0 ? (b.runs / b.overs).toFixed(1) : '0.0'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="btn btn-primary px-8" onClick={() => alert('Match data saved to cloud!')}>
          <Save size={18} className="inline mr-2" /> Save Match State
        </button>
      </div>
    </div>
  );
};

export default MatchScorecard;

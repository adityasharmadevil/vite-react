import { useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState('Monitoring Active...');

  const runScan = () => {
    setStatus('Scanning policy files...');
    setTimeout(() => {
      setStatus('Scan Complete: 0 threats detected.');
    }, 2000);
  };

  return (
    <div className="monitor-container">
      <header className="monitor-header">
        <h1>{'{ PolicyShield-Monitor }'}</h1>
        <p className="subtitle">Project Status Dashboard v1.0</p>
      </header>

      <div className="card terminal-output">
        <p className="log-entry">[SYSTEM] Initializing PolicyShield subsystem...</p>
        <p className="log-entry">[INFO] Data integrity check passed.</p>
        <p className="log-entry">[STATUS] {status}</p>
      </div>

      <div className="card">
        <button onClick={runScan} className="action-btn">
          Run Policy Scan
        </button>
        <p className="read-the-docs">
          Monitoring enterprise policy compliance in real-time.
        </p>
      </div>

      <footer className="monitor-footer">
        <p>A Project by: [Aditya Sharma]</p>
        <p>Tech Stack: React, Vite, TypeScript, CSS</p>
      </footer>
    </div>
  );
}

export default App;

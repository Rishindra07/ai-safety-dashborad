import { useState } from 'react';
import { mockIncidents } from './data';
import IncidentForm from './components/IncidentForm';
import IncidentList from './components/IncidentList';
import './App.css';

function App() {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest');

  const addIncident = (newIncident) => {
    setIncidents(prev => [newIncident, ...prev]);
  };

  return (
    <div className="App">
      <h1>AI Safety Incident Dashboard</h1>

      {/* Controls */}
      <div className="controls">
        <div className="filter-group">
          <label>Filter by Severity:</label>
          {['All', 'Low', 'Medium', 'High'].map(level => (
            <button
              key={level}
              className={filter === level ? 'active' : ''}
              onClick={() => setFilter(level)}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="sort-group">
          <label>Sort by Date:</label>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Form */}
      <IncidentForm addIncident={addIncident} />

      {/* List */}
      <IncidentList incidents={incidents} filter={filter} sortOrder={sortOrder} />
    </div>
  );
}

export default App;

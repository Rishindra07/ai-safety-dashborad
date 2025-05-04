import { useState } from 'react';
import './IncidentForm.css';

const IncidentForm = ({ addIncident }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('Title and Description are required.');
      return;
    }

    const newIncident = {
      id: Date.now(),
      title,
      description,
      severity,
      reported_at: new Date().toISOString()
    };

    addIncident(newIncident);

    // Clear form
    setTitle('');
    setDescription('');
    setSeverity('Low');
  };

  return (
    <form className="incident-form" onSubmit={handleSubmit}>
      <h2>Report New Incident</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default IncidentForm;

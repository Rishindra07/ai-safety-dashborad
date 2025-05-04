import { useState } from 'react';
import './IncidentItem.css';

const IncidentItem = ({ incident }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="incident-item">
      <div className="incident-header">
        <h3>{incident.title}</h3>
        <p><strong>Severity:</strong> {incident.severity}</p>
        <p><strong>Reported:</strong> {new Date(incident.reported_at).toLocaleDateString()}</p>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>
      </div>
      {showDetails && <p className="incident-description">{incident.description}</p>}
    </div>
  );
};

export default IncidentItem;

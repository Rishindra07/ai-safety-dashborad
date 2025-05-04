import IncidentItem from './IncidentItem';
import './IncidentList.css';

const IncidentList = ({ incidents, filter, sortOrder }) => {
  const filtered = incidents.filter(incident => 
    filter === 'All' || incident.severity === filter
  );

  const sorted = filtered.sort((a, b) => {
    if (sortOrder === 'Newest') {
      return new Date(b.reported_at) - new Date(a.reported_at);
    } else {
      return new Date(a.reported_at) - new Date(b.reported_at);
    }
  });

  return (
    <div className="incident-list">
      {sorted.length === 0 ? (
        <p>No incidents found.</p>
      ) : (
        sorted.map(incident => (
          <IncidentItem key={incident.id} incident={incident} />
        ))
      )}
    </div>
  );
};

export default IncidentList;

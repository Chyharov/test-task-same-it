import React from 'react';

const TrackingHistory = ({ history }) => {
    console.log(history);
  if (!history || history.length === 0) {
    return <p>No tracking history available.</p>;
  }

  return (
    <div>
      <h2>Tracking History</h2>
      <ul>
        {history.map((event, index) => (
          <li key={index}>
            <p>Date/Time: {event.DateTime}</p>
            <p>City: {event.CityName}</p>
            <p>Status: {event.Status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackingHistory;
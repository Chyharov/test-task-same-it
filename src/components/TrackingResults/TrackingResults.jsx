import React from 'react';
import TrackingHistory from 'components/TrackingHistory/TrackingHistory';

const TrackingResults = ({ trackingInfo }) => {

  if (!trackingInfo) {
    return null;
  }

  const { data } = trackingInfo;

  if (!data || data.length === 0) {
    return <p>No tracking information found for this number.</p>;
  }

  const trackingDetails = data[0];

  return (
    <div>
      <h2>Tracking Information</h2>
      <p>Tracking Number: {trackingDetails.Number}</p>
      <p>Status: {trackingDetails.Status}</p>
      <TrackingHistory history={trackingDetails.DocumentChangeReasons} />
    </div>
  );
};

export default TrackingResults;

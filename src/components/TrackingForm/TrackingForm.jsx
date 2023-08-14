import React, { useState } from 'react';
import { getTrackingInfo } from '../../services/Api';


const TrackingForm = ({ onTrackingInfoReceived }) => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (trackingNumber) {
      const trackingInfo = await getTrackingInfo(trackingNumber);
      onTrackingInfoReceived(trackingInfo);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Enter tracking number"
        />
        <button type="submit">Get status TTN</button>
      </form>
    </div>
  );
};

export default TrackingForm;
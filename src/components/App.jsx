import React, { useState } from 'react';
import TrackingForm from '../components/TrackingForm/TrackingForm';
import TrackingResults from '../components/TrackingResults/TrackingResults';


export const App = () => {
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleTrackingInfoReceived = (info) => {
    setTrackingInfo(info);
  };
  

  return (
    <div>
      <h1>New Post Tracking</h1>
      <TrackingForm onTrackingInfoReceived={handleTrackingInfoReceived} />
      <TrackingResults trackingInfo={trackingInfo} />
    </div>
  );
};

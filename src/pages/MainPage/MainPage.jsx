import React, { useState } from 'react';
import TrackingForm from 'components/TrackingForm/TrackingForm';
import TrackingResults from 'components/TrackingResults/TrackingResults';
import Header from 'components/Header/Header';

const MainPage = () => {
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleTrackingInfoReceived = (info) => {
    setTrackingInfo(info);
  };
  return (
    <>
      <Header />
      <main>
      <h1>New Post Tracking</h1>

        <TrackingForm onTrackingInfoReceived={handleTrackingInfoReceived} />
        <TrackingResults trackingInfo={trackingInfo} />
      </main>
    </>
  );
};



export default MainPage;
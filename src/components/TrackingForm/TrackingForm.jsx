import React, { useState } from 'react';
import { getTrackingInfo } from '../../api/Api.js';
import s from './TrackingForm.module.scss'


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
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Enter tracking number"
        />
        <button type="submit">Track</button>
      </form>
    </div>
  );
};

export default TrackingForm;

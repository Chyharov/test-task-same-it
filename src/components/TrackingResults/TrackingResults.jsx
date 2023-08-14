import React from 'react';
import s from './TrackingResults.module.scss'

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
    <section className={s.sectionTrackingResults}>
      <div className='container'>
        <div className={s.traking__container}>
          <ul>
            <li className={s.taking__listItem}><p><strong>Статус доставки:</strong> {trackingDetails.Status}</p></li>
            <li className={s.taking__listItem}><p><strong>Відправлено:</strong> {trackingDetails.CitySender}, {trackingDetails.WarehouseSender}</p></li>
            <li className={s.taking__listItem}><p><strong>Отримано:</strong> {trackingDetails.CityRecipient}, {trackingDetails.WarehouseRecipient}</p></li>
          </ul>
        </div>
      </div>
    </section>
    
  );
};

export default TrackingResults;

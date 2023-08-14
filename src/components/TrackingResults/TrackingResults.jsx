import React from 'react';

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
      <ul>
        <li><p>Статус доставки: {trackingDetails.Status}</p></li>
        <li><p>Відправлено: {trackingDetails.CitySender}, {trackingDetails.WarehouseSender}</p></li>
        <li><p>Отримано: {trackingDetails.CityRecipient}, {trackingDetails.WarehouseRecipient}</p></li>
      </ul>
    </div>
  );
};

export default TrackingResults;

import React, { useState, useEffect } from 'react';
import { getTrackingInfo } from '../../services/Api';
import SearchHistory from 'components/SearchHistory/SearchHistory';

const TrackingForm = ({ onTrackingInfoReceived }) => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [validInput, setValidInput] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  const handleTrackingNumberChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    setTrackingNumber(numericValue);

    if (numericValue.length === 14) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validInput) {
      const trackingInfo = await getTrackingInfo(trackingNumber);
      onTrackingInfoReceived(trackingInfo);
      const newHistory = [...new Set([...searchHistory, trackingNumber])];
      setSearchHistory(newHistory);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    }
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const handleHistoryItemClick = (item) => {
    setTrackingNumber(item);
    handleTrackingNumberChange({ target: { value: item } });
    handleSubmit(new Event('submit'));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={trackingNumber}
          onChange={handleTrackingNumberChange}
          placeholder="Enter tracking number"
        />
        <button type="submit" disabled={!validInput}>Get status TTN</button>
        {trackingNumber.length !== 14 && <p>введіть 14 цифр вашої посилки</p>}
      </form>
      <SearchHistory history={searchHistory}
        onClearHistory={handleClearHistory}
        onHistoryItemClick={handleHistoryItemClick} />
    </div>
  );
};

export default TrackingForm;
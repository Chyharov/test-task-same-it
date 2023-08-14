import React from 'react';

const SearchHistory = ({ history, onClearHistory, onHistoryItemClick }) => {
  return (
    <div>
      <h2>Search History</h2>
      {history.length > 0 ? (
        <div>
          <button onClick={onClearHistory}>Clear History</button>
          <ul>
            {history.map((item, index) => (
              <li key={index} onClick={() => onHistoryItemClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No search history available.</p>
      )}
    </div>
  );
};

export default SearchHistory;
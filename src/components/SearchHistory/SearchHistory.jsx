import React from 'react';
import s from './SearchHistory.module.scss'

const SearchHistory = ({ history, onClearHistory, onHistoryItemClick }) => {
  return (
    <section className={s.section__history}>
      <h2 className={s.history__title}>Search History</h2>
      {history.length > 0 ? (
          <ul>
            {history.map((item, index) => (
              <li className={s.history__listItem}>
                <button key={index} onClick={() => onHistoryItemClick(item)}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
      ) : (
        <p>No search history available.</p>
      )}
      <button onClick={onClearHistory}>Clear History</button>
    </section>
  );
};

export default SearchHistory;
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
                <button type='button' aria-label='click for search again' key={index} onClick={() => onHistoryItemClick(item)}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
      ) : (
        <p>No search history available.</p>
      )}
      {history.length > 0 && (
        <button type='button' aria-label='clear history' onClick={onClearHistory}>Clear History</button>
      )}
    </section>
  );
};

export default SearchHistory;
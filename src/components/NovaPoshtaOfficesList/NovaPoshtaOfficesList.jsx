import React from 'react';
import s from './NovaPoshtaOfficesList.module.scss';

const NovaPoshtaOfficesList = ({ offices }) => {
  return (
    <div className='container'>
      <h2 className={s.office__listTitle}>Результати пошуку:</h2>
      {offices.length > 0 ? (
        <ul className={s.office__list}>
          {offices.map((office) => (
            <li key={office.Number} className={s.office__listItem}>
              <p>{office.CityDescription} - {office.Description}</p>
            </li>
          ))}
        </ul>
      ) : (
          <p>No search office available.</p>
      )}
    </div>
  );
};

export default NovaPoshtaOfficesList;

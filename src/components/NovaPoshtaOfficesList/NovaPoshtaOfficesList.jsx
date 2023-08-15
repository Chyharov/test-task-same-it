import s from './NovaPoshtaOfficesList.module.scss'

const NovaPoshtaOfficesList = ({ offices }) => {

  return (
    <div className='container'>
      <h2 className={s.officel__listTitle}>Результати пошуку:</h2>
      <ul className={s.office__list}>
        {offices.map((office) => (
          <li key={office.Number} className={s.officel__listItem}>
            <p>{office.CityDescription} - {office.Description}</p> 
          </li>
        ))}
      </ul>
    </div>
  );
};



export default NovaPoshtaOfficesList;
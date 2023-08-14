const NovaPoshtaOfficesList = ({ offices }) => {

  return (
    <div>
      <h2>Результати пошуку:</h2>
      <ul>
        {offices.map((office) => (
          <li key={office.Number}>
            <p>{office.CityDescription} - {office.Description}</p> 
          </li>
        ))}
      </ul>
    </div>
  );
};



export default NovaPoshtaOfficesList;
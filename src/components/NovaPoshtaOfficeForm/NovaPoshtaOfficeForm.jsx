import React, { useState } from "react";
import s from './NovaPoshtaOfficeForm.module.scss'

const NovaPoshtaOfficeForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className='container'>
      <input className={s.input__office}
        type="text"
        placeholder="Введіть назву міста українською мовою"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type='button' aria-label='button search' className={s.input__officeBtn} onClick={handleSearch}>Пошук</button>
    </div>
  );
};



export default NovaPoshtaOfficeForm;
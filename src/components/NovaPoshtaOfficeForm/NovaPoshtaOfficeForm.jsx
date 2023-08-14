import React, { useState } from "react";

const NovaPoshtaOfficeForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Введіть назву міста українською мовою"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Пошук</button>
    </div>
  );
};



export default NovaPoshtaOfficeForm;
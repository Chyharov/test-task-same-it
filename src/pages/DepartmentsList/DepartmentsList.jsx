import React, { useState } from "react";
import Header from "components/Header/Header";
import NovaPoshtaOfficesList from "../../components/NovaPoshtaOfficesList/NovaPoshtaOfficesList";
import NovaPoshtaOfficeForm from "../../components/NovaPoshtaOfficeForm/NovaPoshtaOfficeForm";
import { getNovaPoshtaOffices } from "../../services/Api";

const DepartmentsList = () => {
  const [offices, setOffices] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const searchResults = await getNovaPoshtaOffices(searchTerm);
      setOffices(searchResults);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <Header />
      <main>
        <NovaPoshtaOfficeForm onSearch={handleSearch} />
        <NovaPoshtaOfficesList offices={offices} />
      </main>
    </>
  );
};

export default DepartmentsList;
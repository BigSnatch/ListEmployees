import React, { useState, useEffect } from "react";

function SearchingEmpls({ employees, setDBEmployees }) {
    const [querySearch, setQuerySearch] = useState('');

    const handleSearch = (event) => {
        const value = event.target.value;
        setQuerySearch(value);

        const filteredEmployees = employees.map((employee) => {
            if (employee.name.toLowerCase().includes(value.toLowerCase())) {
                employee.matchFilters.byName = true;
            } else employee.matchFilters.byName = false;
            return employee;
        });

        setDBEmployees(filteredEmployees);
    }


    return <input 
            type='text' 
            className="searchByName"
            placeholder="Search by name" 
            value={querySearch} 
            onChange={handleSearch}>
        </input>
};

export default SearchingEmpls;
import React from "react";

function SelectDepartment({employees, setDBEmployees}) {

    const handleSelect = (event) => {
        console.log(employees);
        const query = event.target.value;
        const filteredEmployees = employees.map((employee) => {
            if (employee.department.includes(query)) {
                employee.matchFilters.byDepartment = true;
            } else employee.matchFilters.byDepartment = false;
            return employee;
        });

        setDBEmployees(filteredEmployees);
    } 

    return (
        <select className="filterByDepartment" defaultValue={'all'} onChange={handleSelect}>
            <option value={""}>All</option>
            <option value={"developer"}>Developer</option>
            <option value={"qa"}>QA</option>
            <option value={"teamlead"}>Teamlead</option>
            <option value={"hr"}>HR</option>
        </select>
    );
    
}

export default SelectDepartment;
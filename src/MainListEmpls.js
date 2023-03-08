import React, { useState, useEffect } from "react";
import Employees from "./Employees";
import SearchingEmpls from "./SearchingEmpls";
import SelectDepartment from "./SelectDepartment";

function MainListEmpls({setSelectedEmployee, setActiveComponent, setShowDeleteComponent}) {
    const array_employees = [
        { name: 'John Dir', department: 'developer', description: '' },
        { name: 'Samuel Black', department: 'developer', description: '' },
        { name: 'Lara Croft', department: 'hr', description: '' },
        { name: 'Samanta Rich', department: 'hr', description: '' },
        { name: 'Piter Parker', department: 'qa', description: '' },
        { name: 'Wasley Snipes', department: 'qa', description: '' },
        { name: 'Boris Johnson', department: 'teamlead', description: '' },
    ];

    const downloadDB = () => {
        localStorage.setItem('listEmployees', JSON.stringify(array_employees));
        setShowDownloadbutton(false);

        window.postMessage({
            type: 'listChange'
        }, window.origin);
    }

    const [showDownloadButton, setShowDownloadbutton] = useState(true);
    const [DBEmployees, setDBEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    useEffect(() => {
        const employees = JSON.parse(localStorage.getItem('listEmployees'));
        if (employees) {
            employees.forEach((employee) => employee.matchFilters = {});
            setDBEmployees(employees);
            setFilteredEmployees(employees);
        }
    }, []);

    useEffect(() => {
        const filteredEmployees = DBEmployees.filter((employee) => {
            for (let key in employee.matchFilters) {
                if (!employee.matchFilters[key]) {
                    return false;
                }
            }
            return true;
        });
        setFilteredEmployees(filteredEmployees);
    }, [DBEmployees]);

    useEffect(() => {
        // Listen for postMessage events from other tabs
        const handleMessage = (event) => {
            if (event.origin !== window.origin) {
                return;
            }
            if (event.data.type === 'listChange') {
                const employees = JSON.parse(localStorage.getItem('listEmployees'));
                if (employees) {
                    employees.forEach((employee) => employee.matchFilters = {});
                    setDBEmployees(employees);
                    setFilteredEmployees(employees);
                }
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return <div className="container">
        <div className="filterContainer">
        <SearchingEmpls
                employees={DBEmployees}
                setDBEmployees={setDBEmployees}
            />
            <SelectDepartment
                employees={DBEmployees}
                setDBEmployees={setDBEmployees}
            />
            <button className="AddEmployeeButton" onClick={() => setActiveComponent('AddEmpl')}>Add employee</button>
        </div>
        <div className="tableContainer"> 
            <Employees
                employees={filteredEmployees}
                setSelectedEmployee={setSelectedEmployee}
                setActiveComponent={setActiveComponent}
                setShowDeleteComponent={setShowDeleteComponent}
            />
        </div>
        <div className='addBtnContainer'>
            {showDownloadButton && (
                <button className='downloadButton' onClick={downloadDB}>Download List Employees</button>
            )}
        </div>
    </div>
}

export default MainListEmpls;

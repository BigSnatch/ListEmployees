import React, { useState } from "react";

function AddEmpl({ setActiveComponent }) {
    const [nameValue, setNameValue] = useState('');
    const [departmentValue, setDeparmentValue] = useState('developer');
    const [descriptionValue, setDescriptionValue] = useState('');
    // console.log(departmentValue);

    const addingEmployee = () => {
        const newEmployee = {
            name: nameValue,
            department: departmentValue,
            description: descriptionValue
        };
        const DBEmployees = JSON.parse(localStorage.getItem('listEmployees'));
        DBEmployees.push(newEmployee);
        localStorage.setItem('listEmployees', JSON.stringify(DBEmployees));

        window.postMessage({
            type: 'listChange',
            payload: newEmployee,
        }, window.origin);
    }


    return (
        <div className="formWrapper">
            <div className="employeeFormContainer">
            <div>
                <label>Enter the name of employee:</label>
                <input type='text' value={nameValue} onChange={event => setNameValue(event.target.value)}></input>
            </div>
            <div>
                <label>Select department of employee:</label>
                <select id="departments" defaultValue={'developer'} onChange={event => setDeparmentValue(event.target.value)}>
                    <option value={"developer"}>Developer</option>
                    <option value={"qa"}>QA</option>
                    <option value={"teamlead"}>Teamlead</option>
                    <option value={"hr"}>HR</option>
                </select>
            </div>
            <div>
                <label>Enter the description of employee:</label>
                <textarea value={descriptionValue} onChange={event => setDescriptionValue(event.target.value)}></textarea>
            </div>
            <div className="buttonsContainer">
                <button onClick={() => { addingEmployee(); setActiveComponent('MainListEmpls') }}>Save</button>
                <button onClick={() => setActiveComponent('MainListEmpls')}>Cancel</button>
            </div>
        </div>
        </div>
    );
}

export default AddEmpl;
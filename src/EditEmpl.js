import {React, useState} from "react";

function EditEmpl({selectedEmployee, setActiveComponent}) {
    const DBEmployees = JSON.parse(localStorage.getItem('listEmployees'));

    const [nameValue, setNameValue] = useState(DBEmployees[selectedEmployee].name);
    const [departmentValue, setDeparmentValue] = useState(DBEmployees[selectedEmployee].department);
    const [descriptionValue, setDescriptionValue] = useState(DBEmployees[selectedEmployee].description);

    const editingEmployee = () => {
        const newEmployee = {
            name: nameValue,
            department: departmentValue,
            description: descriptionValue
        };
        DBEmployees[selectedEmployee] = newEmployee;
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
                    <select id="departments" defaultValue={departmentValue} onChange={event => setDeparmentValue(event.target.value)}>
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
                    <button onClick={() => { editingEmployee(); setActiveComponent('MainListEmpls') }}>Save</button>
                    <button onClick={() => setActiveComponent('MainListEmpls')}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default EditEmpl;
import React from "react";

function ViewEmpl({selectedEmployee, setActiveComponent}) {
    const DBEmployees = JSON.parse(localStorage.getItem('listEmployees'));
    const employee = DBEmployees[selectedEmployee];
    

    return (
        <div className="formWrapper">
            <div className="viewFormContainer">
                <div>
                    <label>Name of employee:</label>
                    <div className="inputImitation"><p>{employee.name}</p></div>
                </div>
                <div>
                    <label>Department of employee:</label>
                    <div className="inputImitation"><p>{employee.department}</p></div>
                </div>
                <div>
                    <label>Description of employee:</label>
                    <div className="inputImitation"><p>{employee.description}</p></div>
                    
                </div>
                <div className="buttonContainer">
                    <button onClick={() => setActiveComponent('MainListEmpls')}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default ViewEmpl;
import React from "react";

function Employees({ employees, setSelectedEmployee, setActiveComponent, setShowDeleteComponent }) {
    const result = employees.map((employee, index) => {
        return (
            <tr key={employee.name}>
                <td>{index + 1}</td>
                <td
                    onClick={() => { setSelectedEmployee(index); setActiveComponent('ViewEmpl') }}>{employee.name}
                </td>
                <td>{employee.department}</td>
                <td>
                    <button onClick={() => { setSelectedEmployee(index); setActiveComponent('EditEmpl') }}>Edit</button>
                </td>
                <td>
                    <button onClick={() => { setSelectedEmployee(index); setShowDeleteComponent(true) }}>Delete</button>
                </td>
            </tr>
        );
    }); 

    return <table className="tableOfEmployees">
        <caption><b>List of Employees</b></caption>
        <thead>
            <tr>
                <th>#</th>
                <th>Employee</th>
                <th>Department</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {result}
        </tbody>
    </table>
}

export default Employees;
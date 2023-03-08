import React from "react";

function DeleteEmpl({selectedEmployee, setShowDeleteComponent}) {
    const DBEmployees = JSON.parse(localStorage.getItem('listEmployees'));
    const message = 'Are you sure you want to delete this employee?'

    const deletingEmployee = () => {
        const remove = DBEmployees.splice(selectedEmployee, 1);
        localStorage.setItem('listEmployees', JSON.stringify(DBEmployees));
        
        window.postMessage({
            type: 'listChange',
            payload: DBEmployees,
        }, window.origin);
    }
    

    return (
        <div className="confirmationPopupWrapper">
            <div className="confirmationPopup">
                <div className="message">
                    {message}
                </div>
                <div className="buttonsContainer">
                    <button onClick={() => { deletingEmployee(); setShowDeleteComponent(false) }}>Yeah, I'm sure</button>
                    <button onClick={() => setShowDeleteComponent(false)}>Cancel</button>
                </div>

            </div>
        </div>
    );
}

export default DeleteEmpl;
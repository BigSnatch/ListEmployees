import React, { useState } from 'react';
import MainListEmpls from './MainListEmpls';
import AddEmpl from './AddEmpl';
import EditEmpl from './EditEmpl';
import ViewEmpl from './ViewEmpl';
import DeleteEmpl from './DeleteEmpl';
import './App.css';

function App() {
  // const array_employees = [
  //   { name: 'John Dir', department: 'developer', description: '' },
  //   { name: 'Samuel Black', department: 'developer', description: '' },
  //   { name: 'Lara Croft', department: 'hr', description: '' },
  //   { name: 'Samanta Rich', department: 'hr', description: '' },
  //   { name: 'Piter Parker', department: 'qa', description: '' },
  //   { name: 'Wasley Snipes', department: 'qa', description: '' },
  //   { name: 'Boris Johnson', department: 'teamlead', description: '' },
  // ];

  // const downloadDB = () => {
  //   localStorage.setItem('listEmployees', JSON.stringify(array_employees));
  //   setShowDownloadbutton(false);
  //   window.postMessage({
  //     type: 'listChange'
  //   }, window.origin);
  // }

  const [selectedEmployee, setSelectedEmployee] = useState(0);
  const [activeComponent, setActiveComponent] = useState('MainListEmpls');
  const [showDeleteComponent, setShowDeleteComponent] = useState(false);
  // const [showDownloadButton, setShowDownloadbutton] = useState(true);

  const result = () => {
    switch (activeComponent) {
      case 'MainListEmpls':
        return <MainListEmpls
          setSelectedEmployee={setSelectedEmployee}
          setActiveComponent={setActiveComponent}
          setShowDeleteComponent={setShowDeleteComponent}
        />
      case 'AddEmpl':
        return <AddEmpl setActiveComponent={setActiveComponent}/>
      case 'EditEmpl':
        return <EditEmpl selectedEmployee={selectedEmployee} setActiveComponent={setActiveComponent}/>
      case 'ViewEmpl':
        return <ViewEmpl selectedEmployee={selectedEmployee} setActiveComponent={setActiveComponent}/>
    }
  }
  
  return (
    <div>
      {result()}
      {showDeleteComponent && (
        <DeleteEmpl selectedEmployee={selectedEmployee} setShowDeleteComponent={setShowDeleteComponent}/>
      )}
      {/* <div className='addBtnContainer'>
        {showDownloadButton && (
          <button className='downloadButton' onClick={downloadDB}>Download List Employees</button>
        )}
      </div> */}
    </div>
  );
}

export default App;

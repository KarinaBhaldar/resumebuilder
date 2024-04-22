// src/App.js
import React, { useRef, useState } from 'react';
import { Button } from '@material-ui/core';
import { useReactToPrint } from 'react-to-print';
import ResumeForm from './component/ResumeForm';
import Resume from './component/Resume';
import PrintResume from './component/PrintResume';
import './App.css'



    
const App = () => {
  const [formData, setFormData] = useState({});
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    
    <div>
      <h1>Resume Builder</h1>
      <ResumeForm onSubmit={setFormData} />
      <div style={{ display: 'none' }}>
        <Resume ref={componentRef} formData={formData} />
      </div>
      
      <Button onClick={handlePrint} color="primary" variant="contained" style={{float:'right' ,margin_top:'2px'}}>
        Download Print
      </Button>
    </div>
  
  );
};

export default App;
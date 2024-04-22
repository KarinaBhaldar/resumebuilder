// src/components/PrintResume.js
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Resume from './Resume';

const PrintResume = ({ formData }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Resume ref={componentRef} formData={formData} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default PrintResume;
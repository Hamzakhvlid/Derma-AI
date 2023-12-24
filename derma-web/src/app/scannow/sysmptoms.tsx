import React, { useState } from 'react';

const SymptomSelector = () => {
  // Dummy symptoms list
  const dummySymptoms = [
    { name: 'Fever', selected: false },
    { name: 'Cough', selected: false },
    { name: 'Headache', selected: false },
    { name: 'Fatigue', selected: false },
    { name: 'Shortness of breath', selected: false },
    { name: 'Fever', selected: false },
    { name: 'Cough', selected: false },
    { name: 'Headache', selected: false },
    { name: 'Fatigue', selected: false },
    { name: 'Shortness of breath', selected: false },
  ];

  const [symptoms, setSymptoms] = useState(dummySymptoms);
  // State to track selected symptoms
  const [selectedSymptoms, setSelectedSymptoms] = useState(['']);

  // Function to handle symptom selection
  const handleSymptomSelect = (symptomName: any) => {
    const updatedSymptoms = symptoms.map((symptom) => {
      if (symptom.name === symptomName) {
        return { ...symptom, selected: !symptom.selected };
      }
      return symptom;
    });
  
    setSymptoms(updatedSymptoms);
  
    // Update selected symptoms
    const selectedSymptomsNames: string[] = updatedSymptoms
      .filter((symptom) => symptom.selected)
      .map((symptom) => symptom.name);
  
    setSelectedSymptoms(selectedSymptomsNames);
  };

  return (
    <div className='ml-[24%] md:ml-[12%] mt-[1%]'>
      <div className='flex flex-col md:flex-row '>
        {symptoms.map((symptom) => (
          <div
            key={symptom.name}
            className={`chip ${symptom.selected ? 'bg-blue-300' : 'bg-blue-100'} bg-black/2 rounded-xl pr-2 pl-2 pt-2 pb-2 mr-2 mb-3 shadow-lg `}
            onClick={() => handleSymptomSelect(symptom.name)}
          >
            {symptom.name}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default SymptomSelector;

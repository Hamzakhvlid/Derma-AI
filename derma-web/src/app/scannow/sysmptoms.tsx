
'use client';
import React, { useState ,useEffect} from 'react';
import { useFormik } from "formik";
import { scanNowDisease,scanNowTips } from '../schemas';
import { useField } from 'formik';

import { useFormikContext } from 'formik';
import "./style.css";
import { error } from 'console';
import { useDispatch, useSelector } from 'react-redux';
import { setAdditionalInfo ,setReqSymptoms} from '../lib/reducers/scanNow';
import { RootState } from '../lib/store';
import { diseaseSymptoms ,beautyTopics} from './staticData';

const initialValues = {
  
  additionalInfo: "",
};
const SymptomSelector = () => {
  // Dummy symptoms list
  
  
  const type = useSelector((state: RootState) => state.scanNow.type);
   const chips = useSelector((state: RootState) => state.scanNow.selectionChips);
  const [symptoms, setSymptoms] = useState(chips);

  // State to track selected symptoms
  const [selectedSymptoms, setSelectedSymptoms] = useState(['']);
  const [wordCount, setWordCount] = useState(0);
  const stateSymptoms = useSelector((state: RootState) => state.scanNow.symptoms);

 const dispatch= useDispatch();

  useEffect(() => {
    setSymptoms(chips);
  },[chips]);

 

  // Function to handle symptom selection
  const handleSymptomSelect = (symptomName: any) => {
    const updatedSymptoms = symptoms.map((symptom:any) => {
      if (symptom.name === symptomName) {
        return { ...symptom, selected: !symptom.selected };
      }
      return symptom;
    });
  
    setSymptoms(updatedSymptoms);
  
    // Update selected symptoms
    const selectedSymptomsNames: string[] = updatedSymptoms
      .filter((symptom:any) => symptom.selected)
      .map((symptom:any) => symptom.name);
  
    setSelectedSymptoms(selectedSymptomsNames);

     dispatch(setReqSymptoms(selectedSymptomsNames.join(",-")));
     console.log(stateSymptoms);
   
  
  };
  const { values,setFieldValue, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: type==='disease'?scanNowDisease:scanNowTips,
      onSubmit:  (values, action) => {
        try {
          console.log(values);
        } catch (error) {
          alert(JSON.stringify(error));
        }
        action.resetForm();
      },
    
    });
    useEffect(() => {
      const words = values.additionalInfo.trim().split(/\s+/);
      dispatch(setAdditionalInfo(values.additionalInfo));
      console.log(stateSymptoms);
      setWordCount(words.length-1);
    }, [values.additionalInfo]);


  return (
    <div className=''>
      <div className='flex flex-col  overflow-scroll h-80 md:flex-row md:overflow-auto md:h-auto md:flex-wrap'>
        {symptoms.map((symptom:any) => (
          <div
            key={symptom.name}
            className={`chip ${symptom.selected ? 'bg-blue-300' : 'bg-blue-100'} bg-black/2 rounded-xl pr-2 pl-2 pt-2 pb-2 mr-2 mb-3 shadow-lg `}
            onClick={() => handleSymptomSelect(symptom.name)}
          >
            {symptom.name}
          </div>
        ))}
      </div>
      <label className="label" htmlFor="additionalInfo">
              Addtional Info{type==='disease'?'':' (Optional)'}
            </label>
            <div className="additional-info-container ">
      <input
        className="input"
        type="text"
        id="additionalInfo"
        name="additionalInfo"
        placeholder="Enter detail how you think you get it from how many days you have it etc."
    
        onChange={handleChange} // Use handleInputChange for live count
        onBlur={handleBlur}
      />
      <span className="word-count "> {wordCount}/60 </span>
     
    </div>
    {errors.additionalInfo && <div className="error-message">{errors.additionalInfo}</div>}
           
    </div>
  );
};

export default SymptomSelector;

import React from 'react'

interface SuccessMessageProps {
    message: string;
    // Add any other props you need here
  }

const SucessMessage: React.FC<SuccessMessageProps> = ({message}) => {
  return (
   

    
        <div className="success-message flex flex-col justify-center">
    <img src="tick.svg" alt="Checkmark" className="success-icon w-[4rem] self-center" />
        <p className="text-[#1f3a8a] text-[.8rem] self-center">{message}</p>
      </div>
  )
}

export default SucessMessage
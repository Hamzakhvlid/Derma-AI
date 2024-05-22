
"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PaymentSuccess = () => {
    const router=useRouter();
  return (
    <div className="flex flex-col items-center  justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="flex items-center justify-center">
          <Image src="/tick.svg" alt="Success" width={64} height={64} /> {/* Replace with your actual image path */}
        </div>

        <h2 className="text-3xl font-bold text-green-500 text-center mt-6">Payment Successful!</h2>
        <p className="text-gray-600 text-center mt-4">
          Thanks Your Credits are Succesfully updated.
        </p>

        {/* You can add more details about the order here */}
       

        <button  onClick={()=>router.push('/')}className="bg-green-500 hover:bg-green-600   text-white  font-bold py-2 px-4 rounded-lg mt-6">
          Redirect To Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
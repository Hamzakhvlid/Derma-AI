"use client";
import React from 'react';
import {useState} from 'react';
import { buyCredits } from '../Api/baseUrl';
import { toast } from 'react-toastify';
const PurchaseCreditsPage = () => {

  const [message, setMessage] = useState("");
 const [sucess,setSuccess]=useState(false);
  const Credits= async (plan:String) => {

    // Call the API to buy credits
    const response = await fetch(buyCredits, {
      method: 'POST',
      body: JSON.stringify({packageType:plan}),
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        'Content-Type': 'application/json',
  }},
);

    if(response.status==200){
      setSuccess(true);
    }
    const data = await response.json();
    toast("Congratulations 🎊 your Credit has been Updated ");

    setMessage(data.message);
  }
  
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center pt-[4rem] pb-[5rem]">
      {sucess?<h1 className="text-3xl font-bold text-gray-800 mb-8">{message}</h1>:
      <>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Purchase More Credits</h1>
      <div  className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Plan 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 ring-transparent transition-all hover:shadow hover:bg-[#f1f5f9] ">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic</h2>
          <p className="text-lg text-gray-600 ">
            10 additional credits
          </p>
          <p className="text-sm text-gray-500 mb-3 ">
            enough for single person use
          </p>
          <p className="text-2xl font-bold text-blue-900 mb-4">1500 PKR</p>
          <button  onClick={()=>Credits("basic")} className="bg-f4581c bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
        {/* Plan 2 */}
        <div  onClick={()=>Credits("standard")} className="bg-white rounded-lg shadow-md p-6 hover:bg-[#f1f5f9]">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Standard</h2>
          <p className="text-lg text-gray-600 ">
            25 additional credits
          </p>
          <p className="text-sm text-gray-500 mb-3 ">
            enough for 2-3 person use
          </p>
          <p className="text-2xl font-bold text-blue-900 mb-4">3000 PKR</p>
          <button className="bg-f4581c bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
        {/* Plan 3 */}
        <div  onClick={()=>Credits("premium")} className="bg-white rounded-lg shadow-md p-6 hover:bg-[#f1f5f9] ">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Premium</h2>
          <p className="text-lg text-gray-600 ">
            50 additional credits
          </p>
          <p className="text-sm text-gray-500 mb-3 ">
            enough for whole family use
          </p>
          <p className="text-2xl font-bold text-blue-900 mb-4">5000 PKR</p>
          <button className="bg-f4581c bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </div></>}
    </div>
  );
};

export default PurchaseCreditsPage;
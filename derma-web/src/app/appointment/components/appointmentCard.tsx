import React from 'react';

const AppointmentCard = () => {
  return (
    <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg ">
      <div>
        <h2 className="text-2xl font-semibold">Dermatology Consultation</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Meet with our experienced dermatologist to discuss your skin concerns.
        </p>
      </div>
      <div className="grid gap-4 text-sm mt-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">Date:</span>
          <span className="text-gray-500 dark:text-gray-400">May 25, 2023</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Duration:</span>
          <span className="text-gray-500 dark:text-gray-400">45 minutes</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Start Time:</span>
          <span className="text-gray-500 dark:text-gray-400">2:00 PM</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Location:</span>
          <span className="text-gray-500 dark:text-gray-400">
            123 Main St, Anytown USA
          </span>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 border border-gray-300 rounded-md hover:text-white hover:bg-orange-600 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Reschedule
        </button>
        <button className="px-4 py-2 ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
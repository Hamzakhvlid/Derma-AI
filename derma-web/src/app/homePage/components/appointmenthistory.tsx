export const appointmentshistory = [
  {
    date: "April 15, 2023",
    time: "10:00 AM",
    reason: "Routine Check-up",
    status: "Completed",
  },
  {
    date: "March 28, 2023",
    time: "2:30 PM",
    reason: "Dental Cleaning",
    status: "Completed",
  },
  {
    date: "February 12, 2023",
    time: "9:00 AM",
    reason: "Allergy Consultation",
    status: "Pending",
  },
  {
    date: "January 5, 2023",
    time: "11:45 AM",
    reason: "Physical Exam",
    status: "Cancelled",
  },

];


export default function AppointmentHistory() {
  return (
    <div className="wrapper hidden md:block">
    <div className="space-y-7">
        <h1 className="text-2xl font-bold  sm:text-3xl">Appointment History</h1>
        <p className="text-gray-500 dark:text-white">View your recent appointments and their status.</p>
      </div>
    <div className="rounded-lg border shadow-sm ">
        
        <table className="w-full table-auto text-left">
      <thead className="bg-gray-100 dark:text-white">
        <tr>
          <th className="px-4 py-3 font-medium text-gray-900 ">
            Date
          </th>
          <th className="px-4 py-3 font-medium text-gray-900 ">
            Time
          </th>
          <th className="px-4 py-3 font-medium text-gray-900 ">
            Reason
          </th>
          <th className="px-4 py-3 font-medium text-gray-900 ">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 ">
        {
          appointmentshistory.map((appointment) => (
            <tr className="text-gray-500 dark:text-white">
              <td className="px-4 py-3 text-sm ">
                {appointment.date}
              </td>
              <td className="px-4 py-3 text-sm  ">
                {appointment.time}
              </td>
              <td className="px-4 py-3 text-sm  ">
                {appointment.reason}
              </td>
              <td className="px-4 py-3 text-sm font-medium text-green-500 ">
                {appointment.status}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div>
    </div>
  );
}

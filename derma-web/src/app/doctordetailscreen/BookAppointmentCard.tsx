export default function BookAppointmentCard() {
    return (
        <div className="w-auto flex flex-col items-start justify-start h-auto drop-shadow-md px-[2rem] bg-[#eef4f6] py-5 rounded-lg mt-20">
            <h1 className="font-bold text-lg">Book Appointment Now</h1>
            <div className="flex">
                <img src={"/1.svg"} alt="" />
                Select Hospital/Clinic
            </div>
            <div className="rounded-md border-blue-900 border-solid border-2 sm:w-[30rem] w-auto">
                <div className="px-4  sm:space-y-0 space-y-3 py-2">
                    <div className="flex text-sm font-bold">
                        <img src="/videocamB.svg" alt="" />
                        Video Consultant
                    </div>
                    <div className="flex text-sm ">
                        <img src="/clock.svg" alt="" />
                        {`6:00 - 8:00`}
                    </div>
                    <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between w-[28rem]">
                        <div className="flex">
                            <img src="/greendot.svg" alt="" />
                            <h1 className="text-sm text-green-800">Available Tomorrow</h1>
                        </div>
                        <div>Rs. {`1000`}</div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <img src={"/2.svg"} alt="" />
                Select Date & Time
            </div>
            

        </div>
    )
}
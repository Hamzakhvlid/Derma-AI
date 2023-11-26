import Button from "./Button"
import DiscountTag from "./DiscountTag"




const DoctorsCard = (props: {
    imgUrl: String,
    name: String,
    isVerfied: Boolean,
    isSergeon: Boolean,
    speciality: String,
    study: String,
    reviews: Number,
    experience: String,
    satisfaction: Number,

}) => {
    return (
        <>
            <div className="w-full h-auto drop-shadow-md px-[2rem] bg-white py-5 rounded-lg">
                <div className="flex sm:flex-row flex-col justify-between items-center">
                    <div className="flex sm:flex-row flex-col">
                        <img
                            className="rounded-full shadow-lg mb-6 mt-6 sm:mx-[6rem] mx-0 w-24 "
                            src="https://i.ibb.co/XVFPhWP/PSX-20230524-011601.jpg"
                            alt="avatar"
                        />
                        <div className="sm:pb-0 pb-4">
                            <div className="space-y-2">
                                <div className="flex">
                                    <h1 className="text-blue-900 underline font-bold ">{props.name}</h1>
                                    {props.isVerfied && <img className="h-6 w-6" src="https://cdn-icons-png.flaticon.com/256/6784/6784655.png" alt="" />}
                                </div>
                                <div className="flex sm:space-x-10 space-x-3">
                                    <p className="sm:text-sm text-xs text-gray-600">{props.speciality}</p>
                                    {props.isSergeon && <div className="bg-green-900 text-white text-xs rounded-sm px-1 py-1">Surgeon</div>}
                                </div>
                                <p className="sm:text-sm text-xs text-gray-600">{props.study}</p>
                            </div>
                            <div className="mt-5  text-sm  sm:divide-x divide:y divide-gray-300 flex sm:flex-row flex-col  sm:space-x-10 ">
                                <div>
                                    <h1>Reviews</h1>
                                    <h1 className="font-bold">{`${props.reviews}`}</h1>
                                </div>
                                <div className="sm:pl-4 pl-0">
                                    <h1>Experience</h1>
                                    <h1 className="font-bold">{props.experience}</h1>
                                </div>
                                <div className="sm:pl-4 pl-0">
                                    <h1>Satisfaction</h1>
                                    <h1 className="font-bold">{`${props.satisfaction}`}%</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">

                        <Button title={"Video Consultant"} color={"bg-red-800"} imgUrl={"/videocam.svg"} />
                        <Button title={"Book Appointment"} color={"bg-blue-900"} imgUrl={""} />
                        {props.isSergeon && <div className="relative mt-3">
                            <DiscountTag />
                            <Button title={"Pre-Surgery Appointment"} color={"bg-green-800"} imgUrl={""} />
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorsCard
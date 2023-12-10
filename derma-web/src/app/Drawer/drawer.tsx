import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

interface DrawerProps {
  isOpen: boolean;
  name: string;
  user: {
    id: number;
    name: string;
    phoneNo: string;
  };
  onClose: () => void;
  onApply: () => void;
  otherConsultant: Array<{
    id: Number;
    place: string;
    area: string;
    timeFrom: string;
    timeTo: String;
    available: string;
    price: Number;
    isAvailable: Boolean;
    phone: string;
  }>;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  onApply,
  otherConsultant,
  user,
  name,
}) => {
  return (
    <div
      className={`filter-drawer w-full flex justify-center flex-col items-center z-50 border-blue-900 border-solid border-2 ${
        isOpen ? "open" : "hidden"
      }`}
    >
      <div>
        Select Appointments
        {otherConsultant.map((id) => (
          <SwiperSlide className="rounded-md border-gray-300 border-solid border-2 w-[30rem]">
            <Link
              href={{
                pathname: "/checkpaymentType",
                query: {
                  id: id.id.toString(),
                  patientName: user.name,
                  patientPhoneNo: user.phoneNo,
                  doctorname: name,
                  appointmentTime: id.timeFrom,
                  hospitalPhone: id.phone,
                  hospital: id.area,
                  place: id.place,
                  date: id.available,
                },
              }}
              className="cursor-pointer"
            >
              <div className="px-4 sm:space-y-0 space-y-3 py-2">
                <div className="flex text-sm font-bold">
                  {`${id.area}, ${id.place}`}
                </div>
                <div className="flex text-sm ">
                  <img src="/clock.svg" alt="" />
                  {`${id.timeFrom} - ${id.timeTo}`}
                </div>
                <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between w-[28rem]">
                  <div className="flex">
                    <img src="/greendot.svg" alt="" />
                    <h1 className="text-sm text-green-800">{id.available}</h1>
                  </div>
                  <div>Rs. {`${id.price}`}</div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </div>
      <button onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Drawer;

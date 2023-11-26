import DoctorsCard from "./DoctorsCard";
import sampleDoctorData from "../sampleDoctorData";

const Doctors = () => {
    return (
        <div>
            <div className="relative">
                <img
                    className="w-full bg-cover h-[25rem]"
                    src="https://doctorshospital.com.pk/wp-content/uploads/2019/12/page-title-about-1.jpg"
                    alt=""
                />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold leading-none text-center text-white">
                    Meet Our Doctors
                </h1>
            </div>

            {sampleDoctorData.doctors.map((id) => (
                <div className="flex flex-col sm:px-20 px-3 mt-10 ">
                    <DoctorsCard
                        name={id.name}
                        experience={id.experience}
                        isVerfied={id.isVarified}
                        reviews={id.reviews}
                        speciality={id.speciality}
                        satisfaction={id.satisfaction}
                        key={id.id}
                        imgUrl={""}
                        study={id.degree}
                        isSergeon={id.isSurgeon}
                        videoConsultation={id.videoConsultation}
                        otherConsultations={id.otherConsultations}
                    />
                </div>
            ))}

        </div>
    );
};

export default Doctors;

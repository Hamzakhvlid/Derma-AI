


// import Doctors from "./doctors/page";
import doctorsData from "../../data/dataprovider/doctordata";


const Team = () => {
  
  var doctors=doctorsData;
  return (
    <section className="mt-16   " id="team">
      <div className="container px-6 py-12 mx-auto">
 
          <header className="">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 dark:text-white">
                  Team
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto dark:text-white">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative "> Meet </span>
                </span>{" "}
                Our Expert <span className="text-blue-500"> Team </span>
              </h2>

              <p className="max-w-[43rem] text-md mx-auto mt-4 text-gray-600 dark:text-white">
                Our dedicated team of skin care professionals is committed to
                providing you with the best skin care possible.{" "}
                <span className=" hidden lg:inline">
                  Each member of our team is highly skilled and experienced in
                  their respective areas of expertise, ensuring that you receive
                  personalized and high-quality treatment.
                </span>
              </p>
            </div>
          </header>
      

        <div className="grid gap-8 mt-12  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
         
         {doctors.map((doctor) => <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-60 mx-auto rounded-lg"
              src={doctor.imgUrl}
              alt="avatar"
            />

            <div className="mt-2">
              <h3 className="text-md font-bold text-gray-700 dark:text-white">{doctor.name} </h3>
              <span className="mt-1 font-medium text-gray-600 dark:text-white ">{doctor.specialization}</span>
            </div>
          </div>
)}
          
        
         
        </div>
      </div>
    </section>
  );
};

export default Team;

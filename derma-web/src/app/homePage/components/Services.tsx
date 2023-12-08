
import Consultation from "./Images/consultation.jpg";

import { Fade } from "react-awesome-reveal";


const Services = () => {
 

 
 
  return (
    <section className="px-5 " id="service">
      <div className=" ">
        <header className="">
          <Fade>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Services
                </p>
              </div>
              <h2 className="max-w-[40rem] mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
                  <span className="relative"> The </span>
                </span>{" "}
                Suite of Skin-care <span className="text-blue-500">Services</span>{" "}
                we offers
              </h2>

              <p className="max-w-[40rem] text-md mx-auto mt-4 text-gray-500">
              Derma AI provides a comprehensive suite of dermatological services, including general dermatology, cosmetic dermatology, pediatric dermatology, and emergency dermatology. Our cutting-edge AI technology can help you detect and diagnose skin diseases with unparalleled accuracy and efficiency.
              </p>
            </div>
          </Fade>
        </header>

        <ul className="grid gap-4 h-30 mt-6 sm:grid-cols-2   lg:grid-cols-4 mr-2 ">
          <Fade>
            <li className="bg-slate-200  ">
              <div className="h-[250px]">  <img src={'AIface.jpg'} alt="" className="object-cover h-full w-full" /></div>
            

              <div className="relative py-2">
                <h3 className="text-m text-center text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  AI diseases Diagnosis & Prevention
                </h3>
              </div>
            </li>
          </Fade>

        
          <Fade>
            <li className="bg-slate-200">
              <div className="h-[250px]"> <img src={'cosmeticderma.jpg'}   alt="" className="object-cover h-full w-full" /></div>
             

              <div className="relative py-2">
                <h3 className="text-m text-center text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Cosmetic Dermatology
                </h3>
              </div>
            </li>
          </Fade>
          <Fade>
            <li className="bg-slate-200 ">
            <div className="h-[250px]"> <img src={'skintest.jpg'}  alt="" className="object-cover h-full w-full" />
</div>
             
              <div className="relative py-2">
                <h3 className="text-m text-center text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Skin Allergy Test
                </h3>
              </div>
            </li>
          </Fade>
          <Fade>
            <li className="bg-slate-200">
            <div className="h-[250px]"> <img src={'medicines.jpg'} alt="" className="object-cover h-full w-full" />
</div>
             
              <div className="relative py-2">
                <h3 className="text-m text-center text-gray-700 group-hover:underline group-hover:underline-offset-4">
                   Skin Care prodcuts & Medicines
                </h3>
              </div>
            </li>
          </Fade>
         
         
          <Fade>
            <li className="bg-slate-200 rounded-[4px]">
            <div className="h-[250px]"><img src={Consultation.src} alt="" className="object-cover h-full w-full"/></div>
              

              <div className="relative py-2 ">
                <h3 className="text-m text-center text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Check-ups and Consultation
                </h3>
              </div>
            </li>
          </Fade>
          <Fade  >
            <li className="bg-slate-200 ">
              <div className="h-[250px] "
              > <img src={'acne.jpg'}   alt="" className="object-cover h-full w-full" />
              </div>
             
              <div className="relative py-2">
                <h3 className="text-m text-center text-gray-700 ">Acne Treatment</h3>
              </div>
            </li>
          </Fade>

        </ul>
      </div>
    </section>
  );
};

export default Services;

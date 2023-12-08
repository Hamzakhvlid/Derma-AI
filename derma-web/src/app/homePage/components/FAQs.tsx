
import { Fade } from "react-awesome-reveal";

const FAQs = () => {
  return (
    <section className="bg-white pb-7 text-slate-900">
      <div className="container  flex flex-col justify-center p-3 mx-auto md:p-8">
        <Fade>
          <h2 className="mb-10 mt-10 text-3xl font-bold leading-none text-center sm:mx-4">
            {" "}
            Frequently Asked Questions
          </h2>
        </Fade>
        <div className="flex flex-col divide-y divide-gray-300 sm:mx-12 lg:px-12 xl:px-32 mb-10">
          <Fade>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:font-semibold">
                {" "}
                What Services does Derma AI offer?
              </summary>

              <div className="px-4 pb-4">
                <p>
                  {" "}
                  Derma AI offers a comprehensive range of virtual dermatological services, leveraging advanced artificial intelligence to provide personalized skincare solutions
                </p>
              </div>
            </details>
          </Fade>
          <Fade>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:font-semibold">
                {" "}
              
             How does Derma AI analyze my skin?{" "}
              </summary>
              <div>
                <p className="px-4 pb-4">
                Derma AI employs advanced algorithms to analyze the information provided, including skin type, concerns, and historical data. The system processes this data to generate a detailed analysis, offering insights into your skin's unique characteristics and needs.
                </p>
                <p className="px-4 pb-4">
                  
                </p>
              </div>
            </details>
          </Fade>
          <Fade>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:font-semibold">
                {" "}
                How do virtual consultations work on Derma AI?
              </summary>
              <div>
                <p className="px-4 pb-4">
                  {" "}
                  Virtual consultations on Derma AI enable you to connect with our virtual dermatologist in real-time. You can discuss your skin concerns, share images if needed, and receive expert advice. It's a convenient way to access professional dermatological insights from the comfort of your home, fostering a seamless and personalized skincare experience
                </p>
                <p className="px-4 pb-4">
                  {" "}
                
                </p>
              </div>
            </details>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

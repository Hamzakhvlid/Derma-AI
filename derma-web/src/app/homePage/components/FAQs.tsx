

const FAQs = () => {
  return (
    <section id="faqs" className="bg-white dark:bg-slate-800 pb-7 text-slate-900 dark:text-white">
      <div className="container  flex flex-col justify-center p-3 mx-auto md:p-8">
  
          <h2 className="mb-10 mt-10 text-3xl font-bold leading-none text-center sm:mx-4">
            {" "}
            Frequently Asked Questions
          </h2>
 
        <div className="flex flex-col divide-y divide-gray-300 sm:mx-12 lg:px-12 xl:px-32 mb-10">
      
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:font-semibold">
                {" "}
                What personal information do we collect from the people that
                visit our blog, website or app?{" "}
              </summary>
              <div>
                <p className="px-4 pb-4">
                  When you register on our site we may collect information
                  including <br /> Name <br />
                  Email Address (for international patients only)
                  <br />
                  Phone Number Mailing Address in case of medicine delivery and
                  lab test home sample collection
                </p>
                <p className="px-4 pb-4"></p>
              </div>
            </details>
       
          <FAQsFade
            answer={`Derma AI offers a comprehensive range of virtual
            dermatological services, leveraging advanced artificial
            intelligence to provide personalized skincare solutions`}
            question={`What Services does Derma AI offer?`}
          />
          <FAQsFade
            answer={`Derma AI employs advanced algorithms to analyze the
            information provided, including skin type, concerns, and
            historical data. The system processes this data to generate a
            detailed analysis, offering insights into your skin's unique
            characteristics and needs.`}
            question={`How does Derma AI analyze my skin?`}
          />
          <FAQsFade
            answer={`Virtual consultations on Derma AI enable you to connect with
                  our virtual dermatologist in real-time. You can discuss your
                  skin concerns, share images if needed, and receive expert
                  advice. It's a convenient way to access professional
                  dermatological insights from the comfort of your home,
                  fostering a seamless and personalized skincare experience`}
            question={`How do virtual consultations work on Derma AI?`}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQs;

const FAQsFade = (props: { question: String; answer: String }) => {
  return (
   
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:font-semibold">
          {" "}
          {props.question}
        </summary>
        <div>
          <p className="px-4 pb-4"> {props.answer}</p>
          <p className="px-4 pb-4"> </p>
        </div>
      </details>
    
  );
};

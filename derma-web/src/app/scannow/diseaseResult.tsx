import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

function SkinAnalysisResult({ apiResponse }: { apiResponse: any }) {
  const code=apiResponse.status_code;
  const router=useRouter();
  const { status_code, ...rest } =  apiResponse;
  apiResponse=rest; 
  function handleTryAgain(){
    router.push("/scannow");
  }
  return (<>
    <div className="flex flex-col justify-between items-center align-middle">
      <div className="h-[80vh] overflow-y-scroll lg:h-[80vh] lg:overflow-auto">
      {Object.entries(apiResponse).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td>
            {typeof apiResponse[key] === "object" ? (
              <table className="w-full text-sm border-collapse text-left">
                <tbody>
                  {Object.entries(apiResponse[key]).map(
                    ([subKey, subValue]) => (
                      <tr key={subKey}>
                        <td>{subKey}</td>
                        <td>
                          {typeof apiResponse[key][subKey] === "object" ? (
                            <table>
                              <tbody>
                                {Object.entries(apiResponse[key][subKey]).map(
                                  ([newSubKey, subValue]) => (
                                    <tr key={newSubKey}>
                                      <td>{newSubKey}</td>
                                      <td>
                                        {apiResponse[key][subKey][newSubKey]}
                                      </td>
                                    </tr>
                                  )
                                )}
                              </tbody>
                            </table>
                          ) : (
                            apiResponse[key][subKey]
                          )}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            ) : (
              apiResponse[key]
            )}
          </td>
        </tr>
      ))}
     
    </div>
    <div className="flex pt-2 justify-center"> {code===400?<Link   href={"/"} className="bg-blue-900 p-3 w-32 text-center rounded text-white  ml-4 mt-4">Try Again</Link>:<Link href={"/doctors"} className="bg-blue-900 p-3 w-32 text-center rounded text-white  ml-4 mt-4">Book Appointment</Link>}</div>
    
      
    </div>
   
   </>
  );
}

export default SkinAnalysisResult;

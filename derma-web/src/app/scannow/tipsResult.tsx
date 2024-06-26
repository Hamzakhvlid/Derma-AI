import Link from "next/link";
import { Router } from "next/router";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@radix-ui/themes";
import { useDispatch } from "react-redux";
import {
  setImageName,
  setImageUrl,
  setResponse,
  scanSuccess,
  scanFailure,
  setReqSymptoms,
  setAdditionalInfo,
  setScanType,
  backToInitialState
} from "../lib/reducers/scanNow";

function tipsResult({ apiResponse, close }: { apiResponse: any,close:Function }) {
  const code=apiResponse.status_code;
  const router=useRouter();
  const { status_code, ...rest } =  apiResponse;
  const dispatch= useDispatch();
  function handleTryAgain(){
   
    close();
    dispatch(setReqSymptoms(""));
    dispatch(setAdditionalInfo(""));

    dispatch(setImageName(""));
    dispatch(setImageUrl(""));
    dispatch(setResponse({}));
 
    dispatch(setScanType("disease"));
    dispatch(scanFailure(""));
   dispatch(backToInitialState())
  }
  apiResponse=rest; 
  return ( 
    <div className="h-[60vh] overflow-y-scroll overflow-x-scroll sm:overflow-x-auto">
      
          <span role="img" aria-label="Sun and moon emoji">
            ☀️🌙
          </span>{" "}
         
         
      {Object.entries(apiResponse).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td>
            {typeof apiResponse[key] === "object" ? (
              <table>
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
      <div className="flex pt-2 justify-center"> {code===400?<button onClick={handleTryAgain} className="bg-blue-900 p-3 w-32 text-center rounded text-white  ml-4 mt-4">Try Again</button>:<Link href={"/doctors"} className="bg-blue-900 p-3 w-32 text-center rounded text-white  ml-4 mt-4">Book Appointment</Link>}</div>
    </div>
  );
}

export default tipsResult;

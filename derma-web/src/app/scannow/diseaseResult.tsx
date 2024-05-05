import Link from "next/link";
import React from "react";

function SkinAnalysisResult({ apiResponse }: { apiResponse: any }) {
  return (
    <div className="flex flex-col justify-between items-center">
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
    <Link href={"/doctors"} className="bg-blue-900 p-3  text-center rounded text-white ">Book Appointment</Link>
    </div>
  );
}

export default SkinAnalysisResult;

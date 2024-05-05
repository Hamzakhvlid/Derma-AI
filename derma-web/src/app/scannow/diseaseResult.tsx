import React from 'react';

function SkinAnalysisResult({ apiResponse }: { apiResponse: any }) {


  return (
    

    <div className="vertical-table">
    {Object.entries(apiResponse).map(([key, value]) => (
                <tr key={key}>
                    <td>{key}</td>
                    <td>{typeof apiResponse[key] ==='object'?<table>
                    <tbody>
                      {Object.entries(apiResponse[key]).map(([subKey, subValue]) => (
                        <tr key={subKey}>
                          <td>{subKey}</td>
                          <td>{typeof apiResponse[key][subKey]==='object'?<table>
                    <tbody>
                      {Object.entries(apiResponse[key][subKey]).map(([newSubKey, subValue]) => (
                        <tr key={newSubKey}>
                          <td>{newSubKey}</td>
                          <td>
                          {apiResponse[key][subKey][newSubKey]}
                          
                          </td> 
                        </tr>
                      ))}
                    </tbody>
                  </table>:apiResponse[key][subKey]}</td> 
                        </tr>
                      ))}
                    </tbody>
                  </table>:apiResponse[key] }</td>
                </tr>))}
  </div>
  
  );
}

export default SkinAnalysisResult;
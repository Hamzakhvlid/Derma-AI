import React from 'react';

function tipsResult({apiResponse}: {apiResponse: any}) {
  return (
    <div>
      <h2>Diagnosis</h2>
      <table>
        <thead>
          <tr>
            <th>Skin Analysis</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Skin type</td>
            <td>Oily</td>
          </tr>
          <tr>
            <td>Skin concerns</td>
            <td>Wrinkles, Acne</td>
          </tr>
          <tr>
            <td>Texture</td>
            <td>Mid 30s</td>
          </tr>
        </tbody>
      </table>

      <h3>Skin Care Routines</h3>
      <ul>
        <li>
          <span role="img" aria-label="Sun and moon emoji">
            ☀️🌙
          </span>{' '}
          Pre-cleanse
        </li>
        <li>
          <input type="checkbox" checked /> Laneige Cream Skin Milk Cleanser
          <span style={{ fontSize: '0.8em', color: 'gray' }}><br></br>
            every day
          </span>
        </li>
        <li>
          <input type="checkbox" checked /> Innisfree Green Tea Seed Serum
          <span style={{ fontSize: '0.8em', color: 'gray' }}><br></br>
            every day
          </span>
        </li>
        {/* Add more list items as needed */}
      </ul>
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
      <div>
        
      </div>
    </div>
  );
}

export default tipsResult;
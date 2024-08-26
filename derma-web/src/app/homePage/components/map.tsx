'use client';
import { Loader } from "@googlemaps/js-api-loader";

import React, { useEffect } from "react";










export function Map() {
  const mapRef=React.useRef<HTMLDivElement>(null);

  

  useEffect(  ()=>{

    const intitmap = async()=>{

      const loader= new Loader({apiKey:process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,version:"weekly"});
     
      const {Map} = await loader.importLibrary("maps");
      const {Marker} = await loader.importLibrary("marker");
      const position = {lat:32.86,lng:74.07};

      const mapOptions : google.maps.MapOptions ={
        center:position,
        zoom:8
      }

      


      const map = new Map(mapRef.current as HTMLDivElement ,mapOptions)

      const marker = new Marker({position,map,title:"hello"});
    

      
    }


    intitmap();
    
   
  
    },[])
 
  return (
    <div>
      
    
      <div ref={mapRef} style={{ width:'100%',height:'80vh',boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px;',margin:'2rem',borderRadius:'10px'}}>
    
    </div>

    </div>
    
  );
}

export default Map;

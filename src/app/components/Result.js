"use client"

import { useEffect, useState } from "react";
import JsonFormatter from "react-json-formatter";

 const jsonStyle = {
    propertyStyle: { color: 'red' },
    stringStyle: { color: 'green' },
    numberStyle: { color: 'darkorange' }
  }
const Result = ({title="",status="Normal",currentText,diff}) => {

    


   const safeStatus = ["These two json are identical"];
   
  

    return (
        <div>
             <h3 className="text-lg font-semibold mb-2 h-6 truncate">{title}</h3>
             <p className={`${safeStatus.includes(status)?"text-green-600":"text-red-600"}`}>{status}</p>
                <div
    className="w-[500px] h-[250px] sm:h-[600px] resize-none overflow-auto p-4 text-sm font-mono border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  >

       <JsonFormatter json={diff} tabWith={3} jsonStyle={jsonStyle} />
       </div>
        </div>
    );
}

export default Result;

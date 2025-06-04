"use client"

import { useEffect, useState } from "react";


const Input = ({isInput,title="",handleChangeOnInput,status="Normal",currentText}) => {

    
    const safeStatus= ["Valid JSON","Normal"];
   
   
  

    return (
        <div className="w-full sm:w-1/2 max-w-[800px] flex flex-col">
            <h3 className="text-lg font-semibold mb-2 h-6 truncate">{title}</h3>

             <p className={`${safeStatus.includes(status)?"text-green-600":"text-red-600"}`}>{status}</p>
              <textarea
              onChange={handleChangeOnInput}
              value={currentText}
    className="w-full h-[250px] sm:h-[600px] resize-none overflow-auto p-4 text-sm font-mono border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder={!!title.length?`Paste your ${title} here`:"Result will appear here"}
  />

       
        </div>
    );
}

export default Input;

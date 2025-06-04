"use client"
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import { useCallback, useMemo, useState } from "react";
import { diffJSON } from "./utils";
import Result from "./components/Result";
import { diffJSONV1 } from "./main";

export default function Home() {

  const [oldJSON,setOldJSON] = useState("");
  const [newJSON,setNewJSON] = useState("");
  const [resultData,setResultData] = useState("");
  const [oldJSONStatus,setOldJSONStatus] = useState("Normal");
  const [newJSONStatus,setNewJSONStatus] = useState("Normal");
  const [resultStatus,setResultStatus] = useState("Normal");

   const isValidJSON=useCallback((str)=> {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
},[])


  
  const handleChangeOnOldJSON=(e)=>{
    setOldJSON(e.target.value);
  }

  const handleChangeOnNewJSON=(e)=>{
    setNewJSON(e.target.value);

  }

  const handleClickOnVerify = ()=>{
    try{
      const isOldValid = isValidJSON(oldJSON);
      const isNewValid = isValidJSON(newJSON);

     if(!isOldValid)setOldJSONStatus("Invalid JSON");
     if(!isNewValid)setNewJSONStatus("Invalid JSON");

     if(!(isOldValid && isNewValid))return; 

     
     setOldJSONStatus("Valid JSON");
     setNewJSONStatus("Valid JSON");
     const compareResult = diffJSON(JSON.parse(oldJSON),JSON.parse(newJSON));

     if(compareResult.logs.length===0)setResultStatus("These two json are identical");
     else setResultStatus("There are differences");
     setResultData(JSON.stringify(compareResult.logs));
     

    }catch(err){
      console.log(err);
      
    }
  }
  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full flex flex-col sm:flex-row gap-4"> 
          <Input isInput={true} title="Old JSON" handleChangeOnInput={handleChangeOnOldJSON} status={oldJSONStatus} currentText={oldJSON}/>
          <Input isInput={true} title="New JSON" handleChangeOnInput={handleChangeOnNewJSON} status={newJSONStatus} currentText={newJSON}/>
          {/* <Input title="Result" status={resultStatus} currentText={resultData}/> */}
          <Result title="Result" status={resultStatus} currentText={resultData} diff={resultData}/>
        </div>
        <Button onClick={handleClickOnVerify}>
          <p>Diff Now</p>
          </Button>
       </main>
    </div>
  );
}

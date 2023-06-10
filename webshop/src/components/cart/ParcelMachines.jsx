import React, { useEffect, useRef, useState } from 'react'

export default function ParcelMachines() {
    const [parcelMachines, setParcelMachine] = useState([]); //omnivaFromFile
    const [dbParcelMachines, setDbParcelMachine] = useState([]);
    const searchedRef = useRef();

//uef mingid päringud API päring
useEffect(() => {
  fetch("https://www.omniva.ee/locations.json")  // 0,5 sek aega
  .then(res => res.json())  // response lihtsalt nimi 
  .then(json => {
    setParcelMachine(json || []);  //console.log
    setDbParcelMachine(json || []);
  })  
}, []);

const searchFromPMs =  () => {
    const result = dbParcelMachines.filter(pm => 
      pm.NAME.toLowerCase().replace("õ","o")
      .includes(searchedRef.current.value.toLowerCase().replace("õ","o")));
    setParcelMachine(result); //saab otsida väikse kui suure tähega.õ asedab o-ga, otib sõna järgi ülesse.
    }

  return (
    <div>
         <input type="text" ref= {searchedRef} onChange={searchFromPMs} />
      <select>
        {parcelMachines
        .filter(pm => pm.ZIP !== "96331")
        .filter(pm => pm.A0_NAME === "EE") //filtreerib ainult eesti omad 
        .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)} 
        </select>
        
        </div>
  )
}

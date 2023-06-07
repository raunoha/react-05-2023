import React, { useEffect, useRef, useState } from 'react'
import config from "../../data/config.json"

function MaintainShop() {
  const [shops, setShops] = useState([]);
  //const shopRef = useRef();
  const nameRef = useRef();
  const openTimeRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();

  useEffect(() => {
    fetch(config.shopsDbUrl)
.then(res => res.json())
.then(json => setShops(json || []));
  }, []);

  const addShop = () => {  
    shops.push ({ 
    "name": nameRef.current.value,
    "openTime": openTimeRef.current.value,
    "lat": latitudeRef.current.value,
    "lng": longitudeRef.current.value,
    })
   setShops(shops.slice());
   fetch(config.shopsDbUrl,
    {"method": "PUT", "body": JSON.stringify(shops)});
    nameRef.current.value = "";
    openTimeRef.current.value = "";
    latitudeRef.current.value = "";
    longitudeRef.current.value = "";
    }
  

  const deleteCategory = (index) => {
    shops.splice(index,1); //igakord kui splice siis on vaja need panna
    setShops(shops.slice());
     fetch(config.shopsDbUrl, 
     {"method":"PUT", "body":JSON.stringify(shops)});
   }


  return (
    <div>
      <label>Name </label> <br />
<input type="text" ref={nameRef} />
<br />
<label > Open Time</label> <br />
<input type="text" ref={openTimeRef} />
<br />
<label > Latitude</label> <br />
<input type="text" ref={latitudeRef} /> <br />
<label >Longitude</label><br />
<input type="text" ref={longitudeRef} /><br />
<button onClick={addShop} >Add Shop</button>
<div>
  {shops.map((shop,i) =><div key={i}> {shop.name} <br />{shop.openTime} <br />
  {shop.lat} <br /> {shop.lng} 
  <button onClick={() => deleteCategory(i)}>X</button>
  </div>)}
</div>

     {/* <input onKeyUp={addShop} ref={shopRef} type="text" /> <br />
      <button onClick={addShop}>Add shops</button> <br />
      <div>
        {shops.map((shop, i) => <div key={i}>{shop.name} <button onClick={() => deleteCategory(i)}>X</button></div>)}
      </div> */}
      </div>
  )
}

export default MaintainShop;
import { useEffect, useState } from "react";
import Map from '../../components/Map';
import config from "../../data/config.json"

function Shops() {
  const [coordinates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
  const [shops, setShops] = useState([]);


  useEffect(() => {
    fetch(config.shopsDbUrl)
.then(res => res.json())
.then(json => setShops(json || []));
  }, []); 
  //keskpunkt zoom 7 koik poed kaardil

/*const filterByShops = (shopClicked) => {
const result = Map.filter((shops) =>
product.category.includes(categoryClicked));
  setProduct(result)
} */

/* {shop.map(shop => 
  <button key={shop.name} onClick={() =>setShops(shop.name)}>
  {shop.name}
  </button> )} */

  return (<div>

    <div> {shops.map(item => 
    <div key={item.name}> 
    <button onClick={() => setCoordinates({lngLat: [item.lat, item.lng], zoom: 13})}>
      {item.name}
      </button></div>)}

    <button onClick={() => setCoordinates({lngLat: [58.8896, 25.6651], zoom: 7})}>Kõik poed</button> 
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button>
   {/* <button onClick={() => setCoordinates({lngLat: [59.4273, 24.7230], zoom: 13})}>Kristiine</button>
    <button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
    {shop.map(shop => 
  <button key={shop.name} onClick={() =>setShops(shop.name)}>
  {shop.name}
  </button> )}
    <button onClick={() => setCoordinates({lngLat: [58.3779, 26.7308], zoom: 13})}>Tasku</button> */}
    </div>
    <Map mapCoordinates={coordinates}  />
  </div>)
}

export default Shops;
import { useState } from "react";
import Map from '../../components/Map';


function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});

  //keskpunkt zoom 7 koik poed kaardil

  return (<div>
    <button onClick={() => setCoordinates({lngLat: [58.8896, 25.6651], zoom: 7})}>Kõik poed</button> 
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4273, 24.7230], zoom: 13})}>Kristiine</button>
    <button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
    
    <button onClick={() => setCoordinates({lngLat: [58.3779, 26.7308], zoom: 13})}>Tasku</button>
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;
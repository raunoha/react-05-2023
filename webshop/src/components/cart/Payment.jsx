import React from 'react'

 function Payment(props) {  //props =saatmine

 const pay = () => {
   const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
   const data = {
    "api_username": "e36eb40f5ec87fa2",
    "account_name": "EUR3D1",
    "amount": props.sum,
    "order_reference": Math.random() * 9999998,
    "nonce": "a9b723lpqft54" + new Date() + Math.random() * 9999999,
    "timestamp": new Date(),
    "customer_url": "https://ra-webshop-052023.web.app"
    };   //sisu
   const headers = {
    "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
    "Content-Type": "application/json"
   };   //sisselogemise sisu

    fetch(url, {"method": "POST", "body": JSON.stringify(data), "headers": headers})
    .then(res => res.json())
    .then(json => window.location.href = json.payment_link);
 }

 // link ---> html url vahetus, kui ei ole koodiloiku
 //usenavigate const navigate ("/uus url") url vahetus +koodiloik
//window.location.href --> väline url

  return (
    <button onClick={pay}>Maksa</button>
  )
}

export default Payment;
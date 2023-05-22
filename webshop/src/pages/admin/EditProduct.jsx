import React, { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productsFromFile from "../../data/products.json";
import { Button }from 'react-bootstrap';

function EditProduct() {
const { id } = useParams(); //35422021 otsib sealt
// const leitud = tootedFailist [index]
const found = productsFromFile.find(product => product.id === Number(id)); // tuleb üks toode
// const tulem =tootedFailist.filter(toode =>toode.id ===id) filter leiab kogu hunniku 
const index = productsFromFile.findIndex(product => product.id === Number(id));

const idRef = useRef();
const nameRef = useRef();
const priceRef = useRef();
const descriptionRef = useRef();
const imageRef = useRef();
const categoryRef = useRef();
const activeRef = useRef();
const navigate = useNavigate();
const [idUnique, setIdUnique] = useState(true);

const changeProduct = () => { //saab ka kustuda omaduse abil, nime abil jrknr saab kustudada
  const updateProduct = {
    "id":Number (idRef.current.value),
     "name":nameRef.current.value,
     "image":imageRef.current.value, 
     "price":Number (priceRef.current.value),
     "description":descriptionRef.current.value,
     "category":categoryRef.current.value,
     "active":activeRef.current.checked,
  }  
  productsFromFile[index] = updateProduct ; // "UUS_VÄÄRTUS"
navigate("/admin/maintain-products");
} 

const checkIdUniqueness = () => {
/*const result = productsFromFile.filter(element =>element.id === Number (idRef.current.value));
if (result.length === 0 ) {
  setIdUnique(true);
}else {
  setIdUnique(false);
}
}

const found = productsFromFile.find(element =>element.id === Number (idRef.current.value));
if (found === undefined ) {
  setIdUnique(true);
}else {
  setIdUnique(false);
}*/


const index = productsFromFile.findIndex(element =>element.id === Number (idRef.current.value));
if (index === -1 ) {
  setIdUnique(true);
}else {
  setIdUnique(false);
}
}



  return (
    <div>
     { /*<div>Id: {id}</div>
      <div>Toode: {found.name}</div>
       <div>JrkNr: {index}</div>*/}
       {idUnique === false &&  <div>Inserted ID is not unique!</div>} 
       <label>Id</label> <br />
       <input onChange={checkIdUniqueness} ref={idRef} type="number" defaultValue={found.id} /> <br />
       <label>Name</label> <br />
       <input ref={nameRef} type="text" defaultValue={found.name} /> <br />
       <label>Price</label> <br />
       <input ref={priceRef} type="number" defaultValue={found.price} /> <br />
       <label>Description</label> <br />
       <input ref={descriptionRef} type="text" defaultValue={found.description} /> <br />
       <label>Image</label> <br />
       <input ref={imageRef} type="text" defaultValue={found.image} /> <br />
       <label>Category</label> <br />
       <input ref={categoryRef} type="text" defaultValue={found.category} /> <br />
       <label>Active</label> <br />
       <input ref={activeRef} type="checkbox" defaultChecked={found.active} /> <br />
      <Button disabled={idUnique === false}  onClick={changeProduct}>Change</Button>
      </div>
  )
}

export default EditProduct;
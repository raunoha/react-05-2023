import React, { useRef,useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Button }from 'react-bootstrap';
import productsFromFile from "../../data/products.json";

function AddProduct() {
//kodutöö 7 userefi

const [message, setMessage] = useState("Add new product!")
 
  const nameRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const inputiLuger = useRef();

  const add = () => {
    if  (inputiLuger.current.value === "") {
setMessage("Product can t add with empty name!");
    } else {
      setMessage("Product add: " + inputiLuger.current.value);
     /* const addProduct ={
      "id":Number (idRef.current.value),
      "name":nameRef.current.value,
      "image":imageRef.current.value, 
      "price":Number (priceRef.current.value),
      "description":descriptionRef.current.value,
      "category":categoryRef.current.value,
      "active":activeRef.current.checked,
}*/
productsFromFile.push(add);
toast.success("New product added!");
}
}
 
        

return (
    <div>
      <div>{message}</div>
      <label>New Id</label> <br />
       <input ref={inputiLuger}  type="number"  /> <br />
       <label>New Name</label> <br />
       <input ref={nameRef} type="text"  /> <br />
       <label>New Price</label> <br />
       <input ref={priceRef} type="number" /> <br />
       <label>New Description</label> <br />
       <input ref={descriptionRef} type="text"  /> <br />
       <label>New Image</label> <br />
       <input ref={imageRef} type="text"  /> <br />
       <label>New Category</label> <br />
       <input ref={categoryRef} type="text"  /> <br />
       <label>Active</label> <br />
       <input ref={activeRef} type="checkbox"  /> <br />
       <Button onClick={add} >Add Product</Button>
       <ToastContainer 
       position="bottom-right"
       />
      </div>
  )
}

export default AddProduct
import React, { useRef } from 'react'
import axios from 'axios';
import './css/addMaterial.css'
function AddMaterial() {

    const inputName = useRef(null);
    const inputQuantity = useRef(null);
    const inputPrice = useRef(null);

    const handleInputValue = () =>{
        let mName = inputName.current.value;
        let mQuantity = inputQuantity.current.value;
        let mPrice = inputPrice.current.value;
        let body={
            "name":mName,
            "quantity":mQuantity,
            "price":mPrice
        }
        console.log(body)
        axios.post(`http://localhost:3000/material`,body).then(res=>{console.log("res",res)}).catch(err=>console.log("err",err));
    }

  return (
    <div>
        <div className="col-12 addMaterial">
            <div className="row">
                <div className="col-6">
                    <h5>मटेरियल चे नाव</h5>
                </div>
                <div className="col-6">
                    <input type="text" name="" id="" ref={inputName}/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h5>मटेरियल प्रमाण</h5>
                </div>
                <div className="col-6">
                    <input type="text" name="" id="" ref={inputQuantity} />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h5>मटेरियल ची किंमत</h5>
                </div>
                <div className="col-6">
                    <input type="text" name="" id="" ref={inputPrice} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6 d-grid d-md-flex justify-content-md-end">
                    <button className='btn btn-success jama' onClick={handleInputValue}>मटेरियल भरा</button>
                </div>
                <div className="col-6 d-grid d-md-flex justify-content-md-end">
                    <button className='btn btn-danger'>cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddMaterial
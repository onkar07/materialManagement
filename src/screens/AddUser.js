import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
function AddUser() {

    let name = useRef();
    let amount = useRef();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addEntry = () =>{
        let body={
            "name":name.current.value,
            "amount": Number(amount.current.value)
        }
        console.log(body)
        if(name.current.value = `''`){
            name.current.value = "";
            return (
                alert("please add name")
            )
        }
        else{
            axios.post(`http://localhost:3000/add_account`,body).then(res=>{
            if(res.status == 200 || res.status == 204){
                alert("Record updated")
            }}).catch(err=>console.log("err",err));
            name.current.value = "";
            amount.current.value = ""
        }
    }

  return (
    <div>
        <div className="col-12">
            <div className="row mt-3">
                <div className="col-6">
                    <h5>नाव </h5>
                </div>
                <div className="col-6">
                    <input type="text" name="" id="" ref={name}/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <h5>रोख ऍडव्हान्स </h5>
                </div>
                <div className="col-6">
                    <input type="number" name="" id="" ref={amount}/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6 d-grid d-md-flex justify-content-md-end">
                    <button className='btn btn-success jama' onClick={addEntry}>एन्ट्री करा</button>
                </div>
                <div className="col-6 d-grid d-md-flex justify-content-md-end">
                    <button className='btn btn-danger'>cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser
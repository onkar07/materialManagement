import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

import './css/search.css'
function SearchMaterial() {

    let [info, setInfo] = useState([]);
    const [show, setShow] = useState(false);
    let [clickedData, setClickedData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let setQuantity = useRef(null);
    let setMname = useRef();
    async function getAllMaterialList() {
        await axios.get(`http://localhost:3000/material`)
            .then(res => {
                setInfo(res.data)
            })
    }
    

    const handleUpdate = () => {
        let qty = setQuantity.current.value;
        let name = setMname.current.value;
        if(name == ""){
            name = clickedData.name;
        }
        let body={
            "quantity":Number(qty),
            "name":name
        }
        let url=`http://localhost:3000/material/${clickedData.id}`
        axios.patch(url,body).then(res=>{
            if(res.status == 200){
                setShow(false)
            }
            console.log("res",res)}).catch(err=>console.log("err",err));
    }
    useEffect(() => {
        getAllMaterialList()
        console.log("called first")
    },[]);


    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        info.map(data => {
                            return (
                                <tr>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td colSpan="1">
                                        <div className="row">
                                            <div className="col-3">{data.quantity}</div>
                                            <div className="col-4">
                                                <button className='btn btn-outline-primary' onClick={()=>{
                                                    handleShow();
                                                    setClickedData(data);
                                                }}>+</button>
                                                <Modal
                                                    show={show}
                                                    onHide={handleClose}
                                                    backdrop="static"
                                                    keyboard={false}
                                                >
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Modal title</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div className="col-12">
                                                            <div className="row">
                                                                <div className="col-5"  >
                                                                <input type="text" name="" id="" ref={setMname} placeholder={clickedData.name}/>
                                                                    </div>
                                                                <div className="col-5">
                                                                    <input type="text" name="" id="" ref={setQuantity} placeholder={clickedData.quantity}/>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={handleUpdate}>Update</Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </div>
                                        </div></td>
                                    <td>{data.price}</td>
                                    <td>🖋️</td>
                                </tr>
                            )

                        })
                    }


                </tbody>
            </table>
        </div>
    )
}

export default SearchMaterial
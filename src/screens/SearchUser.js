import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
function SearchUser() {

    let[info, setInfo] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let [clickedData, setClickedData] = useState([]);
    let setAmount = useRef(null);
    let setUname = useRef();
    async function getAllUsersList() {
        await axios.get(`http://localhost:3000/add_account`)
            .then(res => {
                setInfo(res.data)
            })
    }

    const handleUpdate = () => {
        let qty = setAmount.current.value;
        let name = setUname.current.value;
        if(name == ""){
            name = clickedData.name;
        }
        let body={
            "amount":Number(qty),
            "name":name
        }
        let url=`http://localhost:3000/add_account/${clickedData.id}`
        axios.patch(url,body).then(res=>{
            if(res.status == 200){
                setShow(false)
            }
            console.log("res",res)}).catch(err=>console.log("err",err));
    }


    useEffect(()=>{
        getAllUsersList()
        console.log(info)
    },[])

  return (
        
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">amount</th>
                        <th scope="col">credit</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        info.map(data=>{
                            return (
                                <tr>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td colSpan="1">
                                        <div className="row">
                                            <div className="col-3">{data.amount}</div>
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
                                                                <input type="text" name="" id="" ref={setUname} placeholder={clickedData.name}/>
                                                                    </div>
                                                                <div className="col-5">
                                                                    <input type="text" name="" id="" ref={setAmount} placeholder={clickedData.amount}/>
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
                                        <td>{data.credit}</td>
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

export default SearchUser
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import './css/sell.css'

function Sell() {
    const[ids, setIds] = useState([])
    const[material, setMaterial] = useState([])
    let m_name;
    let [type, setType] = useState();
    let amount;
    let[acNumber, setacNumber] = useState();
    let[selected, setSelected] = useState({});
    let[clicked, setClicked] = useState(Boolean);
    const inputEl = useRef(null)
    const m_qty = useRef()
    function getAllAccountNumber(){
        axios.get(`http://localhost:3000/add_account`)
        .then(res => {
            setIds(res.data)
        })
    }

    function handleSelectChange(event) {
        setType(event.target.value)
    }
    function handleAccountNumber(event){
        setacNumber(event.target.value)
    }
    function getMaterialName(name){
        let url = `http://localhost:3000/getAllMaterial/${name}`
        axios.get(url)
        .then(res => {
            setMaterial(res.data)
        })
        setClicked(true);
    }
    const onButtonClick = async () => {
        let price = inputEl.current;
        amount = price.value;
        let qty = m_qty.current
        let Mqty = qty.value;
        console.log(amount,acNumber,type,selected)
        let body={
                "material_id":selected.id,
                "quantity":Number(Mqty),
                "user_id":Number(acNumber),
                "pType": type,
                "amount":Number(amount)
        }
        console.log(body);
        axios.post(`http://localhost:3000/sell`,body).then(res=>{console.log("res",res)}).catch(err=>console.log("err",err));
      };

      function getTable(){
          if(clicked == true){
            return (
                material.map((data) => {return <table>
                    <tr className='materialTr' onClick={e => {m_name = e.target.innerText; setSelected(data); setClicked(false)}}
                     value={m_name}>{data.name}</tr>
                </table>})
            )
          }
      }
      
    useEffect(() => {
        getAllAccountNumber()
    }, [])
    
  return (
    <div>
        <div className="col-12 sellMain">
            <div className="row mt-3">
                <div className="col-6">
                    <h5>खात नंबर</h5>
                </div>
                <div className="col-6">
                    <select name="" id="" onChange={handleAccountNumber}>
                        <option value="" >खाता नंबर निवडा</option>
                        {ids.map((data)=>{
                            return <option value={data.id}>{data.id}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <h5>मटेरियल</h5>
                </div>
                <div className="col-6">
                    <input type="text" name="" id="" onChange={e => {getMaterialName(e.target.value);setSelected("")}} value={selected.name}/>
                    <div className="autoComplete" >
                        {getTable()}
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <h5>प्रमाण</h5>
                </div>
                <div className="col-6">
                    <input type="number" name="" id="" ref={m_qty}/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <h5>उधार/रोख</h5>
                </div>
                <div className="col-6">
                    <select name="" id="" onChange={handleSelectChange}>
                        <option value="debit_from_account">खात्यातून वजा करा</option>
                        <option value="credit_on_account">खात्यावर मांडा</option>
                        <option value="hard_cash">रोख रक्कम</option>
                    </select>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <h5>किंमत</h5>
                </div>
                <div className="col-6">
                    <input type="number" name="" id="" ref={inputEl}/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6 d-grid d-md-flex justify-content-md-end">
                    <button className='btn btn-success jama' onClick={onButtonClick}>जमा</button>
                </div>
                <div className="col-6 d-grid d-md-flex justify-content-md-end">
                    <button className='btn btn-danger'>cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sell
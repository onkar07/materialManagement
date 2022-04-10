import React, { useEffect, useState } from 'react'
import axios from 'axios';
function SearchMaterial() {

    let[info, setInfo] = useState([]);

    async function getAllMaterialList(){
        await axios.get(`http://localhost:3000/material`)
        .then(res => {
            setInfo(res.data)
        })
    }
    useEffect(()=>{
        getAllMaterialList()
        console.log(info)
    },[])
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
                        info.map(data=>{
                            return (
                                <tr>
                            <th scope="row">{data.id}</th>
                            <td>{data.name}</td>
                            <td>{data.quantity}</td>
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
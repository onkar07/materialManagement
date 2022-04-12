import React from 'react'
import addMI from '../img/shopping-cart.png'
import showM from '../img/view.png'
import addU from '../img/add-user.png'
import findU from '../img/loupe.png'
import './css/admin.css'
import AddMaterial from './AddMaterial'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  
function Admin() {
  return (
    <div>
        <div className="col-12 cardGutter">
            <div className="row">
                <div className="col-6">
                    <div class="card f1" >
                        <a href="/addMaterial"><img src={addMI} class="card-img-middle" alt="..." /></a>
                        <div class="card-body">
                            <p class="card-text">मटेरियल भरा</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 ">
                    <div class="card f2" >
                        <a href="/searchMaterial"> <img src={showM} class="card-img-top" alt="..." /></a>
                        <div class="card-body">
                            <p class="card-text">मटेरियल बघा</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6 ">
                    <div class="card f1" >
                        <a href="/addUser"><img src={addU} class="card-img-top" alt="..." /></a>
                        <div class="card-body">
                            <p class="card-text">नवीन खात उघडा</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div class="card f2" >
                        <a href="/searchUser"><img src={findU} class="card-img-top" alt="..." /></a>
                        <div class="card-body">
                            <p class="card-text">खाते हुडका</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin

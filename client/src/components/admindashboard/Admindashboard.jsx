import React from 'react'
import { Link } from "react-router-dom"

export default function Admindashboard() {
  return (
    <section class=" container-fluid text-center mt-5 mb-5 pt-5 pb-5">
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <h1>ADMIN DASHBOARD</h1>
        
      </div>
    </div>
    <div>
        <br/>
        <Link to="manageUsers.html"> <button class="btn btn-light px-5 py-2 primary-btn btncustometheme30">
            MANAGE USERS</button></Link>
       
          <Link to="documents.html">  <button class="btn btn-light px-5 py-2 primary-btn btncustometheme30">
            SEE ALL DOCUMENTS</button></Link>
    
      <br/><br/>
      <Link to="updateDelete.html"> <button class="btn btn-light px-5 py-2 primary-btn btncustometheme30">
        DELETE/UPDATE CORPUS
      </button></Link>
     

      <button class="btn btn-light px-5 py-2 primary-btn btncustometheme30">
        CORPUS VERIFICATION
      </button>
      </div>
       
  </section>
  
  )
}

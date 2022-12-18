import React from 'react'
import { Link } from "react-router-dom"

export default function Manageusers() {
  return (
    <section class=" container-fluid text-center m-2"> 
    <Link to="adminDashboard.html"><button class="btn btn-light px-5 py-2 primary-btn">
        GO BACK TO DASHBOARD
      </button></Link>
     
    <div class="row">
      <div class="col-md-12 col-sm-12">
       
        <h1>MANAGE USERS</h1>
        
      </div>
    </div>
   
    <div>
        <table class="styled-table">
            <thead>
                <tr>
                    <th>S No.</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>PASSWORDS</th>
                </tr>
            </thead>
            <tbody>
                <tr class="active-row">
                    <td>01</td>
                    <td>Jalil</td>
                    <td>jalil@gmail.com</td>
                    <td>192021</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>Hamza</td>
                    <td>hamza@gmail.com</td>
                    <td>191888</td>
                </tr>
                <tr>
                    <td>03</td>
                    <td>Faizaan</td>
                    <td>faizaan@gmail.com</td>
                    <td>181924</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
               
               
            </tbody>
        </table>
    </div>
       
  </section>
  )
}

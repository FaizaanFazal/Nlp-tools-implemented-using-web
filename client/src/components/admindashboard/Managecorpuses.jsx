import React from 'react'
import { Link } from "react-router-dom"

export default function Managecorpuses() {
  return (
    <section class=" container-fluid text-center" >
        <Link to="adminDashboard.html"><button class="btn btn-light px-5 py-2 primary-btn" >
            GO BACK TO DASHBOARD
          </button></Link>
         
        <div class="row">
          <div class="col-md-12 col-sm-12">
           
            <h1>UPDATE/DELETE FILES</h1>
            
          </div>
        </div>
       
        <div>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>DOCUMENT</th>
                        <th>DETAILS</th>
                        <th>ACTIONS</th>
        
                    </tr>
                </thead>
                <tbody>
                    <tr class="active-row">
                        <td>01</td>
                        <td>Document 1</td>
                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis illum veritatis placeat recusandae expedita incidunt sint unde dicta distinctio in, corrupti soluta fugit, ducimus iure libero, porro commodi? Quidem, earum!</td>
                        <td>
                            <input type="button" id="edit_button1" value="UPDATE" class="edit" />
                            <input type="button" id="save_button1" value="DELETE" class="save" />
                           
                        </td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Document 2</td>
                        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nobis voluptatum maiores aliquid, obcaecati qui amet odio nemo quas quo veritatis. Ea architecto corrupti neque velit iste. Veniam, magnam quae?</td>
                        <td >
                            <input type="button" id="edit_button1" value="UPDATE" class="edit" />
                            <input type="button" id="save_button1" value="DELETE" class="save" />
                           
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                       
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      
                    </tr>
                    <tr>
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

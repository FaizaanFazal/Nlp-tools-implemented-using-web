import React from 'react'
import { Link } from "react-router-dom"

export default function Userlogin() {
  return (
    <div class="ccontainerr">
    <form action="#">
      <div class="title">SIGN IN TO TEXTOMATIC</div>
      <div class="input-box underline">
        <input type="text" placeholder="Enter Your Username" required />
        <div class="underline"></div>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Enter Your Password" required />
        <div class="underline"></div>
      </div>
      <div class="input-box button">
        <input type="submit" name="" value="Login"/>
      </div>
    </form>
      <div class="option">or Connect With Social Media</div>
      <div class="twitter">
        <Link to="#"><i class="fab fa-twitter"></i>Sign in With Twitter</Link>
      </div>
      <div class="facebook">
        <Link to="#"><i class="fab fa-facebook-f"></i>Sign in With Facebook</Link>
      </div>
  </div>
  )
}

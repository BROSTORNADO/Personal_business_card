import { useState } from "react";

export default function Info(){
    return(
    <div className="info">
        <img src="./src/assets/ballahi.jpg" /> 
        <h2 className="name">M.Abdallahi C.Ahmed</h2>
        <h4 className="gold">Frontend Developper</h4>
        <div className="contact"> 
            <a href="mailto::b.cheikhahmed98@gmail.com" className="email"><img src="./src/assets/Email-logo.jpg" className="email-logo-img"/>mail</a>  
            <a href="https://www.linkedin.com/in/mohamed-abdallahi-cheikh-ahmed-594947254/" className="linked" id="linkedelse"><img src="./src/assets/linkedIn-logo.png" className="email-logo-img"/>LinkedIn</a>
        </div>
    </div> 

    )
}
"use client"

import {useRef} from "react"
import axios from "axios"




export default function Signup (){

    const nameRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const mailRef = useRef<HTMLInputElement>(null);

   




   async function handleSubmit(){

    const name = nameRef.current?.value;
    const email = mailRef.current?.value;
    const password = passRef.current?.value

    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    
    try{


        const response = await axios.post("http://localhost:3000/api/signup", {
            name,password,email
        })

        alert("signup done")



    }catch (err: any) {
      if (err.response?.status === 409) {
        alert(" User already exists!");
      } else if (err.response?.status === 400) {
        alert(" Please fill all fields.");
      } else {
        alert(" Signup failed. Try again.");
      }
      console.error("Signup error:", err);
    }
  

    }


    return <>
    
    <input ref={nameRef} type="text" placeholder="your name "/>
    <input ref={mailRef} type="email" placeholder="your email" />
    <input ref={passRef} type="password" placeholder="your password " />

    <button onClick={handleSubmit}>submit</button>
    
    
    </>
}
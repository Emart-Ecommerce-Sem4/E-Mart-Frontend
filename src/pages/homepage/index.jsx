import React from 'react';
import SignNavBar from "../../components/SignNavBar";

export default function HomePage() {
  
  return (
    <div class="p-3 mb-2 bg-dark text-white">
        <SignNavBar/>
        <div><img src="./Home_Main.png" alt="" class="rounded mx-auto d-block" style={{marginTop:10}}/></div>
        <br></br>
        <h1>DEALS</h1> 

    </div>
  );
}

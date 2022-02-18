import React from 'react';
import image26 from "../asset/image26.png";
import "../CSS/Page9.css";

const Page9 = () => {
  return (
    <>
        <div style={{display:"flex"}}>
            <div>
                <img src={image26} alt='pic'></img>
            </div>

            <div  style={{display:"flex" , flexDirection:"column", justifyContent :"center"}}>
                <h1>Got a Problem</h1>
                <p>Before we put our thinking caps on, tell us few things <br/>about yourself </p>
                <div className='forms' >
                    <div style={{display:"flex" , margin:"5% 0" , gap:"2%"}}>
                        <input type="text" style={{width:"50%" , padding:"5% 2%"}} placeholder='Name *'></input>
                        <input type="text" style={{width:"50%" , padding:"5% 2%" ,  marginRight:"-3%"}} placeholder='Email *'></input>
                    </div>
                    <textarea type="text" style={{width:"100%" , padding:"5% 2%"}} placeholder='Message *'></textarea>
                </div>    
                <div className='send-btn'>
                        <button>Send</button>
                </div>  
            </div>
            
                
                
        </div>
    </>
  )
}

export default Page9;
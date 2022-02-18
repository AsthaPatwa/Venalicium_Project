import { FormControl } from '@mui/material'
import React from 'react'

const Div1 = () => {
  return (
    <>
        <div className='div1'>
            <div><h3>THINK OUT OF THE BOX</h3></div>

            <div><p>Join 350,000 fellow marketers to receive a summary of the latest marketing tips from across the world directly to your inbox once a week.</p></div>
            
                <div className='form'>
                   <form>
                    <input type="text" placeholder='Email'></input>
                      <input type="text" placeholder='Your Name'></input>
                      <input type="text" placeholder='Company Name'></input>
                      
                   </form>

                </div>
                <div className='submit-btn'>
                        <button>Submit</button>
                </div>
            
            <div className='social-icons'>
                
            </div>
        </div>
    </>
  )
}

export default Div1;
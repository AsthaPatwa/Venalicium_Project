import React from 'react';

import Div1 from "./footer/Div1";
import Div2 from "./footer/Div2"
import Div3 from './footer/Div3';
import Div4 from './footer/Div4';
import Div5 from './footer/Div5';
import "../CSS/footer.css";
const footer = () => {
  return (
    <>
        <div className='footer'>
        <Div1 />
        <Div2 />
        <Div3 />
        <Div4 />
        <Div5 />
        </div>
    </>
  )
}

export default footer
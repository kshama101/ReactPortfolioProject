import React from "react";
import Portfolio from './Portfolio';
import Home from './Home';
import About from './About';
import Contact from './Contact';


function Options({count}) {

  return (
    <>
    {count=== 1 && <Home/> } 
    {count ===2 && <About/> }
    {count === 3 && <Portfolio/>}
    {count === 4 && <Contact/>}

    </>
     );
}

export default Options;
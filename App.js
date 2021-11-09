import React, {useState} from 'react'

function App()  {


    const[headingText, setHeadingText] = useState("Hello");
    const [isMouseOver, setMouseOver] = useState("false");

    function handleclick(){
      setHeadingText("Submitted");
    }

function handleMouseOver() {
    setMouseOver(true);
}
function handleMouseOut() {
    setMouseOver(false);
}

    return (
        <div className="container">
        <h1>{headingText}</h1>
        <input type="text" placeholder="what's your name?" /><br /><br />
        <button 
        style={{backgroundColor: isMouseOver ? "black" : "white"}}
         onClick={handleclick} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >Submit</button>
            
        </div>
    )
}


export default App;

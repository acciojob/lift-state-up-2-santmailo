import React from "react";
import Child from "./child";    

const Parent = () => {
    const [userInput, setUserInput] = React.useState("");
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <p>{userInput}</p>
            <Child buttonClick = {setUserInput}/>
        </div>
    );
}   

export default Parent;
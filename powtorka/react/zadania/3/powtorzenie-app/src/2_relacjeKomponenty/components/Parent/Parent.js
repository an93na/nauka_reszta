import React from "react";
import { Child } from "../Child/Child";

export const Parent = () => {
    return <div style={{backgroundColor:'blue', color:'white', padding:'10px', marginBottom: '10px'}}>Parent.js
        <Child/>
        <Child/>
        <Child/>
    </div>
}
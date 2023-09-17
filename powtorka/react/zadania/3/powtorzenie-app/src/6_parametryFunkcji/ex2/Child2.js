import React from "react";

export const Child2 = (props) => {
    return <div>
        <p>Two strings as in props</p>
        {props.name} {props.lastName}
    </div>
}
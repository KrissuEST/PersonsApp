import React from "react"

//Functional component
const Wrapper = (props) => (
    <div className="wrapper">
        {props.children}
    </div>
)

export default Wrapper
import React from "react"

const button = (props)=> {
    return <button 
                className={props.class}
                onClick={props.clickHandler}
                onMouseOver={props.mouseOverHandler}
                onMouseOut={props.mouseOutHandler}
                type={props.type}>
                {props.buttonContent}
            </button>
};

export default button;
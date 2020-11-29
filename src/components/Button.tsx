import React from "react";


type ButtonType = {
    title: string
    letsGO: () => void
    disabled: boolean

}

const Button = (props: ButtonType) => {
    return (

        <button
            className="btn"
            onClick={props.letsGO}
            disabled={props.disabled}
        >

            {props.title}

        </button>
    )
};


export default Button;


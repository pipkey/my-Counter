import React from "react";

type CountType = {
    count: number
    maxValue: number
    error: string

}

const Count = (props: CountType) => {


    return (
        <div>
            <div className={
                (props.count === props.maxValue) || props.error
                    ? "red"
                    : ""
            }>
                <h4> {  props.error
                        ? props.error
                        : props.count

                } </h4>
            </div>
        </div>
    )
};


export default Count;
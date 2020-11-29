import React from "react";
import Button from "./Button";
import Count from "./Count";

type CounterType = {
    count: number
    maxValue: number
    setCount: (some: number) => void
    startValue: number
    error: string
    editMode: boolean

}

const Counter = (props: CounterType) => {

    const inc = () => {
        if (props.count < props.maxValue) {
            props.setCount(props.count + 1)
        }
    };

    const reset = () => {
        props.setCount(props.startValue)
    };


    return (
        <div className="main_count">


            <div className="count">
                <Count
                    error={props.error}
                    count={props.count}
                    maxValue={props.maxValue}
                />
            </div>


            <div className="btn_count">
                <Button
                    title="inc"
                    letsGO={inc}
                    disabled={props.count >= props.maxValue || props.editMode || !!props.error}
                />
                <Button
                    title="reset"
                    letsGO={reset}
                    disabled={props.count === props.startValue || props.editMode || !!props.error}
                />

            </div>
        </div>
    )
};


export default Counter;
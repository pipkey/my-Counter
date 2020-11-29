import React, {ChangeEvent} from "react";
import Button from "./Button";


type SettingType = {
    maxValue: number
    startValue: number
    setMaxValue: (some: number) => void
    setStartValue: (some: number) => void
    setCount: (some: number) => void
    setError: (some: string) => void
    editMode: boolean
    setEditMode: (some: boolean) => void

}

const Settings = (props: SettingType) => {


    const StartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEditMode(true);
        props.setStartValue(e.currentTarget.valueAsNumber);
    };
    const MaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEditMode(true);
        props.setMaxValue(e.currentTarget.valueAsNumber);

    };

    const ValueCall = () => {
        if (props.startValue < 0) {
            props.setError("try again")
        } else if (props.startValue >= 0) {
            props.setError("")
        }
        props.setEditMode(false);
        props.setCount(props.startValue)
    };


    return (
        <div className="main">

            <div className="inp_pan">

                start Value
                <input
                    type="number"
                    onChange={StartValueHandler}

                />

                maxValue
                <input
                    type="number"
                    onChange={MaxValueHandler}
                />

            </div>

            <div className="btn_block">

                <Button
                    title="set"
                    letsGO={ValueCall}
                    disabled={props.startValue >= props.maxValue}
                />

            </div>

        </div>
    )
};


export default Settings;
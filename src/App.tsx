import React, {useState} from "react";
import "./App.css";
import Settings from "./components/Setting";
import Counter from "./components/Counter";


function App() {
    const [error, setError] = useState<string>("set your value");
    const [count, setCount] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(1);
    const [startValue, setStartValue] = useState<number>(0);
    const [editMode, setEditMode] = useState<boolean>(true);





    return (
        <div className="App">
            <Counter
                editMode={editMode}
                count={count}
                maxValue={maxValue}
                setCount={setCount}
                startValue={startValue}
                error={error}

            />

            <Settings
                setEditMode={setEditMode}
                editMode={editMode}
                maxValue={maxValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                setCount={setCount}
                setError={setError}
            />

        </div>
    );
}

export default App;

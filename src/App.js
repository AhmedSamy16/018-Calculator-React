import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

function App() {
  const [input, setInput] = useState("")
  const handleClear = () => {
    setInput("")
  }
  const addToInput = (val) => {
    setInput(input + val)
  }
  const getResult = () => {
    // eslint-disable-next-line no-eval
    setInput(+eval(input).toFixed(2))
  }
  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={input} />
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={getResult}>=</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={handleClear}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;

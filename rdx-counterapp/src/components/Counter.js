import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counter/counterSlice";

function Counter() {
    const [amount, setAmount] = useState(3)

  const countValue = useSelector((state) => state.counter.value);

  const dispatch = useDispatch()

  return (
    <div>
      <div className="row justify-content-center">
        <div className="fs-1 w-25 border bg-dark text-white my-4 p-3 rounded-pill">
          {countValue}
        </div>
      </div>
      <button className="btn btn-danger me-1" onClick={()=> dispatch(decrement())} >Decrement</button>
      <button className="btn btn-primary" onClick={() => dispatch(increment())}>Increment</button>
      
      <br /><br />
      <div className="d-flex align-items-center justify-content-center">
      <input type="number" value= {amount} onChange={(e) => setAmount(e.target.value)} className="border border-primary border-3"/>
      <button className="btn btn-primary ms-2" onClick={() => dispatch(incrementByAmount(amount))}>Increment by Amount</button>
      </div>
    </div>
  );
}

export default Counter;

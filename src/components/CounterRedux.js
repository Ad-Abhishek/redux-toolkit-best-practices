import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy } from "../redux/features/counter.feature";

let CounterRedux = () => {
   
    let dispatch = useDispatch();

    let counterState = useSelector((state) => {
        return state['counter'];
    });

    let {count} = counterState;

    let clickIncr = () => {
        dispatch(increment());
    };

    let clickDecr = () => {
        dispatch(decrement());
    };


    let clickIncrBy = () => {
        dispatch(incrementBy(7));
    }

    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col text-center mt-5">
                        <p className="h3 display-3">{count}</p>
                        <button onClick={clickDecr}>Decrease</button>
                        <button onClick={clickIncr}>Increase</button>
                        <button onClick={clickIncrBy}>Increase By 7</button>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default CounterRedux;
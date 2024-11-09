import React, {useState} from "react";


let Counter = () => {
    const [ counter, setCounter ] = useState(0);
    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col text-center mt-5">
                        <p className="h3 display-3">{counter}</p>
                        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
                        <button onClick={() => setCounter(counter + 1)}>Increase</button>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Counter;
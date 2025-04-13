import { useDispatch, useSelector } from "react-redux";
import { decrementWithCheckingAction, increment } from "../../app/features/Counter/action";

const Counter = () => {
    let {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="counter-container text-center">
            <h3 className="display-4 mb-4 text-primary">Counter Sederhana</h3>
            <h3 className="mb-4">{count}</h3>

            <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-light shadow rounded-pill px-4" onClick={() => dispatch(decrementWithCheckingAction(1))} >-</button>
                {/* {" "} <span>{count}</span> {" "} */}
                <button className="btn btn-success shadow rounded-pill px-4" onClick={() => dispatch(increment(1))}>+</button>
            </div>
        </div>
    )
}

export default Counter;
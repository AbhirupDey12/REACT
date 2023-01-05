import React from "react";

export function CompText(props) {
    return (
        <p>{props.text}</p>
    )
}

export default function Comp1() {
    
    let [count, setCount] = React.useState(0);

    // Here , the first argument that we have recived in the array is the state and the second argument is the setter which we use to re render the updated value in our UI

    function increaseCount() {
        setCount(++count);
    }

    function decreaseCount() {
        setCount(--count);
    }

    return (
        <>
            <button onClick={increaseCount}> Click to increase the count in the p tag </button>
            <button onClick={decreaseCount}> Click to decrease the count in the p tag </button>
            <CompText text={count}></CompText>
        </>
    );

}
// Component is nothing but the function
// Here , this is the first component that we have created
// Every react component must return a single HTML component
// This is called the functional component and it can also be created using the class component

// Props :- Values that we pass when we call out the functional components
// Javascript code should be written using the curly brackets { ... }

// Line number 16 is the example of conditional rendering...

export function Button(props) {
    return (
        // React Fragment ( Empty component / Empty fragment )
        <div>
            <button> {props.text} </button>
            {/* {props.value ? <p> {props.value} </p>  : ""}  */}
        </div>
    );
}

export default function Head() {
    return (
        <div id='head'>
            <h1>Hello from Header</h1>
        </div>
    );
}

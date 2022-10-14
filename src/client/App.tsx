import * as React from "react";
import ReactDOM from "react-dom";

import FeatTest from './components/FeatTest';

function App() {


    return <>
        <h1>App</h1>
        <p>feat test:</p> 
        <FeatTest />
    </>;
}

ReactDOM.render(App(), document.getElementById("root"));

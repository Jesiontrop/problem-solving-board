import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import {Button} from "./modules/Button";

const Test = () => {
    return (
        <Button/>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter >
                <Route exact path="/" component={Test}/>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
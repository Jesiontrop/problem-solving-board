import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import style from "./styles/main.scss"
import {Home} from "./pages/Home";
import {Add} from "./pages/Add";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter >
                    <Route exact path="/" component={Home}/>
                    <Route path="/add" component={Add}/>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import style from "./styles/main.scss"
import { Home } from "./pages/Home";
import { Add } from "./pages/Add";
import { Board } from "./pages/Board";
import { Information } from "./pages/Information";
import { Profile } from "./pages/Profile";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={Home} />
                    <Route path="/add" component={Add} />
                    <Route path="/board" component={Board} />
                    <Route path="/information/:id" component={Information} />
                    <Route path="/profile" component={Profile} />
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

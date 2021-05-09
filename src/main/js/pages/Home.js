import React from "react";
import {Button} from "../modules/Button";
import {Header} from "../modules/Header";
import style from "../styles/Home.page.scss"

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header hideHomeButton/>
                <main>
                    <Button text="Занести проблему"/>
                    <Button text="Посмотреть доску решения проблем"/>
                </main>
            </div>
        );
    }
}

export {Home}
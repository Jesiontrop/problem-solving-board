import React from "react";
import {Button} from "../modules/Button";
import {Header} from "../modules/Header";
import style from "../styles/Home.module.scss"
import {Link} from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header hideHomeButton/>
                <main className={style.homePage}>
                    <Link to="/add" style={{textDecoration: 'none'}}><Button text="Занести проблему"/></Link>

                    <Button text="Посмотреть доску решения проблем"/>
                </main>
            </div>
        );
    }
}

export {Home}
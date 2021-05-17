import React from "react";
import {Button} from "./Button";
import style from "../styles/Header.module.scss"
import {Link} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.headline = props.headline;
        this.status = props.status;
        this.buttonText = this.status ? "Профиль" : "Войти";
        this.hideHomeButton = props.hideHomeButton;
        this.styleHomeButton = this.hideHomeButton ? {display : "none"} : {};
    }

    render() {
        return (
            <header className={style.header}>
                <Link to="/" style={{textDecoration: 'none'}}><Button className="b-2" style={this.styleHomeButton} text="ДРП"/></Link>
                <div className={style.text}>
                    {this.headline}
                </div>
                <Button className="b-2" text={this.buttonText}/>
            </header>
        );
    }
}

export {Header}
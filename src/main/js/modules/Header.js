import React from "react";
import { Button } from "./Button";
import { Overlay } from "./Overlay";
import style from "../styles/Header.module.scss"
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.headline = props.headline;
        this.status = props.status;
        this.buttonText = this.status ? "Профиль" : "Войти";
        this.hideHomeButton = props.hideHomeButton;
        this.styleHomeButton = this.hideHomeButton ? { display: "none" } : {};
        this.onShowOverlay = this.onShowOverlay.bind(this);
        this.overlay = React.createRef();
    }

    onShowOverlay() {
        // document.getElementById("overlay").style.display = "flex";
        this.overlay.current.show();
    }

    render() {
        return (
            <div>
                <header className={style.header}>
                    <Link to="/" style={{ textDecoration: 'none' }}><Button className="b-2" style={this.styleHomeButton} text="ДРП" /></Link>
                    <div className={style.text}>
                        {this.headline}
                    </div>
                    <Button className="b-2" text={this.buttonText} onClick={this.onShowOverlay} />
                </header>
                <Overlay ref={this.overlay}/>
            </div>

        );
    }
}

export { Header }
import React from "react";
import { Button } from "./Button";
import { Overlay } from "./Overlay";
import style from "../styles/Header.module.scss"
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.headline = props.headline;
        this.hideHomeButton = props.hideHomeButton;
        this.styleHomeButton = this.hideHomeButton ? { display: "none" } : {};
        this.hideProfileButton = props.hideProfileButton;
        this.styleProfileButton = props.hideProfileButton ? { display : "none"} : {};
        this.onShowOverlay = this.onShowOverlay.bind(this);
        this.overlay = React.createRef();
    }

    onShowOverlay() {
        this.overlay.current.show();
    }

    render() {
        let isAuth = document.body.contains(document.getElementById("authInfo"));
        return (
            <div>
                <header className={style.header}>
                    <Link to="/" style={{ textDecoration: 'none' }}><Button className="b-2" style={this.styleHomeButton} text="ДРП" /></Link>
                    <div className={style.text}>
                        {this.headline}
                    </div>
                    {isAuth
                        ?   <Link to="/profile" style={{ textDecoration: 'none' }}>
                                <Button className="b-2" style={this.styleProfileButton} text="Профиль" />
                            </Link>
                        : <Button className="b-2" text="Войти" onClick={this.onShowOverlay} />
                    }

                </header>
                <Overlay ref={this.overlay} />
            </div>

        );
    }
}

export { Header }
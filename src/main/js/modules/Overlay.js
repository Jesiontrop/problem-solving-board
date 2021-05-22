import React from "react";
import styles from "../styles/Overlay.module.scss";
import client from "../client";
import { Button } from "./Button";
import { EditField, SelectField } from "./Field";

const Login = (props) => {

    const editStyle = { width: "100%" };

    return (
        <div className={styles.login} style={props.style}>
            <EditField id="email" className="f-2" placeholder="Email" style={editStyle} />
            <EditField id="password" className="f-2" placeholder="Пароль" style={editStyle} />
            <Button className="b-3" text="Войти" />
            <Button className="b-3" text="Зарегестрироваться" onClick={props.changeForm} />
        </div>
    );

}

class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.editStyle = { width: "100%" };
        this.state = { positions: [] };
    }

    componentDidMount() {
        client({ method: "GET", path: '/api/positions?size=100' }).done(response => {
            this.setState({ positions: response.entity._embedded.positions })
        });
    }

    render() {

        return (
            <div className={styles.registration} style={this.props.style}>
                <EditField id="email" className="f-2" placeholder="Email" style={this.editStyle} />
                <EditField id="username" className="f-2" placeholder="ФИО" style={this.editStyle} />
                <SelectField id="position" className="f-2" placeholder="Должность" items={this.state.positions} style={this.editStyle} />
                <EditField id="password" type="password" className="f-2" placeholder="Пароль" style={this.editStyle} />
                <EditField id="repeatPassword" type="password" className="f-2" placeholder="Повторите пароль" style={this.editStyle} />
                <Button className="b-3" text="Зарегестрироваться" onClick />
                <Button className="b-3" text="Войти" onClick={this.props.changeForm} />

            </div>
        );
    }

}

class Overlay extends React.Component {

    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.changeForm = this.changeForm.bind(this);
        this.state = {
            visibleStyle: { visibility: "hidden" },
            isLogin: true
        };
    }

    show() {
        this.setState({ visibleStyle: { visibility: "visible" } });
    }

    hide() {
        this.setState({ visibleStyle: { visibility: "hidden" } });
        this.setState({ isLogin: true });
    }

    changeForm() {
        this.setState({ isLogin: !this.state.isLogin });
    }

    render() {
        return (
            <div>
                <div className={styles.background} style={this.state.visibleStyle} onClick={this.hide}>
                </div>
                {this.state.isLogin
                    ? <Login style={this.state.visibleStyle} changeForm={this.changeForm} />
                    : <Registration style={this.state.visibleStyle} changeForm={this.changeForm} />
                }
            </div>
        );
    }
}

export { Overlay }
import React from "react";
import styles from "../styles/Overlay.module.scss";
import client from "../client";
import { Button } from "./Button";
import { EditField, SelectField } from "./Field";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.editStyle = { width: "100%" };
    }

    render() {
        return(
            <form method="post" action="/login" className={styles.login} style={this.props.style}>
                <EditField type="text" id="username" name="email" className="f-2" placeholder="Email" style={this.editStyle} />
                <EditField type="password" id="password" name="password" className="f-2" placeholder="Пароль" style={this.editStyle} />
                <Button className="b-3" text="Войти" />
                <Button className="b-3" text="Зарегестрироваться" onClick={this.props.changeForm} />
            </form>
        );
    }
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

    registration() {
        let email = document.getElementById("email").value;
        let username = document.getElementById("username").value;
        let positionSelect = document.getElementById("position");
        let position = positionSelect.options[positionSelect.selectedIndex].text;
        let password = document.getElementById("password").value;
        let repeatPassword = document.getElementById("repeatPassword").value;

        if (password === repeatPassword) {
                
            let user = {
                username: username,
                email: email,
                position: position,
                password: password
            }
            client(
                {
                    method: "POST",
                    path: '/api/users',
                    entity: user,
                    headers: { "Content-Type": "application/json" }
                }).done(response => {
                    console.log(response.entity);
                    
                });
        }
    }

    render() {

        return (
            <div className={styles.registration} style={this.props.style}>
                <EditField id="email" className="f-2" placeholder="Email" style={this.editStyle} />
                <EditField id="username" className="f-2" placeholder="ФИО" style={this.editStyle} />
                <SelectField id="position" className="f-2" placeholder="Должность" items={this.state.positions} style={this.editStyle} />
                <EditField id="password" type="password" className="f-2" placeholder="Пароль" style={this.editStyle} />
                <EditField id="repeatPassword" type="password" className="f-2" placeholder="Повторите пароль" style={this.editStyle} />
                <Button className="b-3" text="Зарегестрироваться" onClick={this.registration} />
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
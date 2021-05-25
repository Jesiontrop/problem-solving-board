import React from "react";
import styles from "../styles/Profile.module.scss";
import { Button } from "../modules/Button";
import { InfoField } from "../modules/Field";
import { Header } from "../modules/Header";
import { Line } from "../modules/Line";

class Profile extends React.Component {

    render() {
        let username = document.getElementById("authUsername").innerText;
        let email = document.getElementById("authEmail").innerText;
        let position = document.getElementById("authPosition").innerText;
        return (
            <div>
                <Header headline="Профиль" hideProfileButton/>
                <main className={styles.profilePage}>
                    <Button className="b-3" onClick={this.props.history.goBack} text="Вернуться назад" />
                    <Line subtitle="ФИО" text={username} />
                    <Line subtitle="Электронная почта" text={email} />
                    <Line subtitle="Должность" text={position} />
                    <Button className="b-3" text="Список ответственных задач" />
                    <form action="/logout">
                        <Button className="b-3" text="Выйти из профиля" style={{ backgroundColor: "#EB5757" }} />
                    </form>

                </main>
            </div>
        );
    }
}

export { Profile }
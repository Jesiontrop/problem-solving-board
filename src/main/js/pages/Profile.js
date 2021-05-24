import React from "react";
import { Button } from "../modules/Button";
import { InfoField } from "../modules/Field";
import { Header } from "../modules/Header";
import styles from "../styles/Profile.module.scss"

class Profile extends React.Component {

    render() {
        return (
            <div>
                <Header headline="Профиль" />
                <main className={styles.profilePage}>
                    <Button className="b-3" onClick={this.props.history.goBack} text="Вернуться назад" />
                </main>
            </div>
        );
    }
}

export { Profile }
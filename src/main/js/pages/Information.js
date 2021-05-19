import React from "react";
import styles from "../styles/Information.module.scss";
import {Button} from "../modules/Button";
import {Line} from "../modules/Line";
import {Header} from "../modules/Header";

class Information extends React.Component {

    render() {
        return(
            <div>
                <Header headline="Подробная информация о проблеме"/>
                <main className={styles.informationPage}>
                    <Button className="b-3" text="Вернуться назад"/>
                    <Line subtitle="Регистарционный номер"/>
                    <Line subtitle="Время и дата регистрации"/>
                    <Line subtitle="Участок"/>
                    <Line subtitle="Проблема"/>
                    <Line subtitle="Уровень риска"/>
                    <Line subtitle="Предлагаемое решение"/>
                    <Line subtitle="Ответственный за решение"/>
                    <Line subtitle="Плановая дата решения проблемы"/>
                    <Line subtitle="Фактическая дата решения проблемы"/>
                    <Line subtitle="Уровень решения проблемы"/>
                    <Line subtitle="Статус решения проблемы"/>
                    <Line subtitle="Ответственное ФН за решение проблемы"/>

                </main>
            </div>

        );
    }
}

export {Information}
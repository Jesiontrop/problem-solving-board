import React from "react";
import styles from "../styles/Information.module.scss";
import client from "../client";
import {Button} from "../modules/Button";
import {Line} from "../modules/Line";
import {Header} from "../modules/Header";

class Information extends React.Component {

    constructor(props) {
        super(props);
        this.state = {board: {}};
    }

    componentDidMount() {
        let path = "/api/viewBoards/" + this.props.match.params.id;
        console.debug(path);
        client({method: "GET", path: path }).done(response => {
            this.setState({
                board: response.entity
            });
            console.debug(response.entity);
        });
    }

    render() {
        return(
            <div>
                <Header headline="Подробная информация о проблеме"/>
                <main className={styles.informationPage}>
                    <Button className="b-3" onClick={this.props.history.goBack} text="Вернуться назад"/>
                    <Line subtitle="Регистарционный номер" text={this.state.board.id}/>
                    <Line subtitle="Время и дата регистрации" text={this.state.board.registrationDate}/>
                    <Line subtitle="Участок" text={this.state.board.areaName}/>
                    <Line subtitle="Проблема" text={this.state.board.problem}/>
                    <Line subtitle="Уровень риска" text={this.state.board.riskLevelName}/>
                    <Line subtitle="Предлагаемое решение" text={this.state.board.proposedSolution}/>
                    <Line subtitle="Ответственный за решение" text={this.state.board.responsibleName}/>
                    <Line subtitle="Плановая дата решения проблемы" text={this.state.board.plannedDate}/>
                    <Line subtitle="Фактическая дата решения проблемы" text={this.state.board.actualDate}/>
                    <Line subtitle="Уровень решения проблемы" text={this.state.board.solvingLevelName}/>
                    <Line subtitle="Статус решения проблемы" text={this.state.board.resolutionStatusName}/>
                    <Line subtitle="Ответственное ФН за решение проблемы" text={this.state.board.fmResponsibleName}/>

                </main>
            </div>

        );
    }
}

export {Information}

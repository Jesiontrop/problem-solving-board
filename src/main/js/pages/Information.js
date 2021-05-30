import React from "react";
import styles from "../styles/Information.module.scss";
import client from "../client";
import { Button } from "../modules/Button";
import { Line, SelectLine } from "../modules/Line";
import { Header } from "../modules/Header";
import { SelectField } from "../modules/Field";

class Information extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            board: {},
            riskLevels: [],
            solvingLevel: [],
            fmResponsible: [],
            isChange: false 
        };
        this.changeForm = this.changeForm.bind(this);
        this.commitChange = this.commitChange.bind(this);
    }

    componentDidMount() {
        let path = "/api/viewBoards/" + this.props.match.params.id;
        console.debug(path);
        client({ method: "GET", path: path }).done(response => {
            this.setState({
                board: response.entity
            });
            console.debug(response.entity);
        });
        client({ method: "GET", path: '/api/riskLevels?size=100' }).done(response => {
            this.setState({ riskLevels: response.entity._embedded.riskLevels })
        });
        client({ method: "GET", path: '/api/solvingLevels?size=100' }).done(response => {
            this.setState({ solvingLevel: response.entity._embedded.solvingLevels })
        });
        client({ method: "GET", path: '/api/fmResponsibles?size=100' }).done(response => {
            this.setState({ fmResponsible: response.entity._embedded.fmResponsibles })
        });
    }

    changeForm() {
        this.setState({ isChange: !this.state.isChange });
    }

    commitChange() {
        let riskLevel = document.getElementById("riskLevel").value;
        let proposedSolution = document.getElementById("proposedSolution").innerText;
        let plannedDate = document.getElementById("plannedDate").innerText;
        let actualDate = document.getElementById("actualDate").innerText;
        let solvingLevel = document.getElementById("solvingLevel").value;
        let fmResponsible = document.getElementById("fmResponsible").value;
        let board = {
            riskLevel: riskLevel,
            solvingLevel: solvingLevel,
            fmResponsible: fmResponsible
        }
        if(proposedSolution) 
            board.proposedSolution = proposedSolution;
        if(plannedDate)
            board.plannedDate = plannedDate;
        if(actualDate)
            board.actualDate = actualDate;
        client(
            {
                method: "PATCH",
                path: '/api/boards/' + this.props.match.params.id,
                entity: board,
                headers: { "Content-Type": "application/json" }
            }).done(response => {
                let path = "/api/viewBoards/" + this.props.match.params.id;
                console.debug(path);
                client({ method: "GET", path: path }).done(response => {
                    this.setState({
                        board: response.entity
                    });
                    console.debug(response.entity);
                    this.changeForm();
                });
            });
        
    }

    render() {
        let leaderField = document.getElementById("authLeader");
        let leader = false;
        if (leaderField)
            leader = true;

        let responsible = "";
        if (this.state.board.responsibleName)
            responsible = this.state.board.responsibleName + " " + this.state.board.responsibleEmail;
        return (
            <div>
                <Header headline="Подробная информация о проблеме" />
                {!this.state.isChange
                    ?
                    <main className={styles.informationPage}>
                        <Button className="b-3" onClick={this.props.history.goBack} text="Вернуться назад" />
                        <Line subtitle="Регистарционный номер" text={this.state.board.id} />
                        <Line subtitle="Время и дата регистрации" text={this.state.board.registrationDate} />
                        <Line subtitle="Участок" text={this.state.board.areaName} />
                        <Line subtitle="Проблема" text={this.state.board.problem} />
                        <Line subtitle="Уровень риска" text={this.state.board.riskLevelName} />
                        <Line subtitle="Предлагаемое решение" text={this.state.board.proposedSolution} />
                        <Line subtitle="Ответственный за решение" text={responsible} />
                        <Line subtitle="Плановая дата решения проблемы" text={this.state.board.plannedDate} />
                        <Line subtitle="Фактическая дата решения проблемы" text={this.state.board.actualDate} />
                        <Line subtitle="Уровень решения проблемы" text={this.state.board.solvingLevelName} />
                        <Line subtitle="Статус решения проблемы" text={this.state.board.resolutionStatusName} />
                        <Line subtitle="Ответственное ФН за решение проблемы" text={this.state.board.fmResponsibleName} />
                        {leader
                            ? <Button className="b-3" text="Изменить данные" onClick={this.changeForm} />
                            : null
                        }
                        {leader
                            ? <Button className="b-3" text="Назначить ответсвенного" />
                            : null
                        }
                    </main>
                    :
                    <main className={styles.informationPage}>
                        <Button className="b-3" onClick={this.props.history.goBack} text="Отмена" onClick={this.changeForm} />
                        <Line subtitle="Регистарционный номер" text={this.state.board.id} />
                        <Line subtitle="Время и дата регистрации" text={this.state.board.registrationDate} />
                        <Line subtitle="Участок" text={this.state.board.areaName} />
                        <Line subtitle="Проблема" text={this.state.board.problem} />
                        <SelectLine id="riskLevel" subtitle="Уровень риска" items={this.state.riskLevels} />
                        <Line id="proposedSolution" subtitle="Предлагаемое решение" text={this.state.board.proposedSolution} editable />
                        <Line id="plannedDate" subtitle="Плановая дата решения проблемы" text={this.state.board.plannedDate} editable />
                        <Line id="actualDate" subtitle="Фактическая дата решения проблемы" text={this.state.board.actualDate} editable />
                        <SelectLine id="solvingLevel" subtitle="Уровень решения проблемы"  items={this.state.solvingLevel} />
                        <SelectLine id="fmResponsible" subtitle="Ответственное ФН за решение проблемы"  items={this.state.fmResponsible} />
                        <Button className="b-3" onClick={this.props.history.goBack} text="Изменить" onClick={this.commitChange} />
                    </main>
                }
            </div>

        );
    }
}

export { Information }

import React from "react";
import {EditField, SelectField, TextareaField} from "../modules/Field";
import style from "../styles/Add.module.scss"
import {Header} from "../modules/Header";
import client from "../client"
import {Button} from "../modules/Button";

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.editStyle = {width: "100%"};
        this.state = {positions: [], areas: [], riskLevels: []};
    }

    componentDidMount() {
        client({method: "GET", path: '/api/positions?size=100'}).done(response => {
            this.setState({positions: response.entity._embedded.positions})
        });
        client({method: "GET", path: '/api/areas?size=100'}).done(response => {
            this.setState({areas: response.entity._embedded.areas})
        });
        client({method: "GET", path: '/api/riskLevels?size=100'}).done(response => {
            this.setState({riskLevels: response.entity._embedded.riskLevels})
        });
    }

    onSubmit() {
        let fullname = document.getElementById("fullname").value;
        let positionSelect = document.getElementById("position");
        let position = positionSelect.options[positionSelect.selectedIndex].text;
        let informant = {
            fullname: fullname,
            position: position
        }

        let area = document.getElementById("area").value;
        let riskLevel = document.getElementById("riskLevel").value;
        let problem = document.getElementById("problem").innerText;
        let proposedSolution = document.getElementById("proposedSolution").innerText;

        client(
            {
                method: "POST",
                path: '/api/informants',
                entity: informant,
                headers: {"Content-Type": "application/json"}
            }).done(response => {
            let informant = response.entity._links.informant.href;
            let boardForm = {
                area: area,
                riskLevel: riskLevel,
                problem: problem,
                proposedSolution: proposedSolution,
                informant: informant,
                resolutionStatus: "http://localhost:8080/api/resolutionStatuses/5"
            }
            console.debug(boardForm);
            client(
                {
                    method: "POST",
                    path: '/api/boards',
                    entity: boardForm,
                    headers: {"Content-Type": "application/json"}
                }).done(response => {
                console.debug(response.entity);
            });
        });
    }

    render() {
        return (
            <div>
                <Header text="Занести проблему"/>
                <main className={style.addPage}>
                    <div className={style.separator}>
                    </div>
                    <div className={style.separator}>
                        <div>ФИО (не обязательно)</div>
                        <EditField id="fullname" className="f-2" style={this.editStyle}/>
                        <div>Должность (не обязательно)</div>
                        <SelectField id="position" className="f-2" items={this.state.positions}/>
                        <div>Отделенение/участок где есть проблема (обязательно)</div>
                        <SelectField id="area" className="f-2" items={this.state.areas}/>
                        <div>Уровень риска (обязательно)</div>
                        <SelectField id="riskLevel" className="f-2" items={this.state.riskLevels}/>
                        <div>Проблема (обязательно)</div>
                        <TextareaField id="problem" className="f-2" style={this.editStyle}/>
                        <div>Предлогаемое решение (не обязательно)</div>
                        <TextareaField id="proposedSolution" className="f-2" style={this.editStyle}/>
                        <Button onClick={this.onSubmit} className="b-3" text="Отправить на ДРП"/>
                    </div>
                </main>
            </div>

        );
    }
}

export {Add}

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
        this.state = {areas: [], riskLevels: []};
    }

    componentDidMount() {
        client({method: "GET", path: '/api/positions'}).done(response => {
            this.setState({positions: response.entity._embedded.positions})
        });
        client({method: "GET", path: '/api/areas'}).done(response => {
            this.setState({areas: response.entity._embedded.areas})
        });
        client({method: "GET", path: '/api/riskLevels'}).done(response => {
            this.setState({riskLevels: response.entity._embedded.riskLevels})
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
                        {/*need to avoid typeError*/}
                        {this.state.positions !== undefined
                            ? <SelectField id="position" className="f-2" items={this.state.positions}/>
                            : <EditField id="position" className="f-2" style={this.editStyle}/>}
                        {this.state.areas !== undefined
                            ?
                            <div>
                                <div>Отделенение/участок где есть проблема (обязательно)</div>
                                <SelectField id="area" className="f-2" items={this.state.areas}/>
                            </div>
                            : null}
                        {this.state.areas !== undefined
                            ?
                            <div>
                                <div>Уровень риска (обязательно)</div>
                                <SelectField id="riskLevel" className="f-2" items={this.state.riskLevels}/>
                            </div>
                            : null}
                        <div>Проблема (обязательно)</div>
                        <TextareaField id="problem" className="f-2" style={this.editStyle}/>
                        <div>Предлогаемое решение (не обязательно)</div>
                        <TextareaField id="proposed_solution" className="f-2" style={this.editStyle}/>
                        <Button className="b-3" text="Отправить на ДРП"/>
                    </div>
                </main>
            </div>

        );
    }
}

export {Add}
import React from "react";
import style from "../styles/BoardObject.module.scss";
import client from "../client";
import {Button} from "./Button";
import {Line} from "./Line";

class BoardObject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {area: {}, riskLevel: {}, resolutionStatus: {}};
    }

    componentDidMount() {
        client({method: "GET", path: this.props.board._links.area.href}).done(response => {
            this.setState({area: response.entity});
            console.debug(response.entity);
        });
        client({method: "GET", path: this.props.board._links.riskLevel.href}).done(response => {
            this.setState({riskLevel: response.entity});
            console.debug(response.entity);
        });
        client({method: "GET", path: this.props.board._links.resolutionStatus.href}).done(response => {
            this.setState({resolutionStatus: response._links.self.href});
            console.debug(response.entity);
        });
    }

    render() {
        return (
            <div className={style.boardObject}>
                <Line subtitle="Проблема" text={this.props.board.problem}/>
                <Line subtitle="Участок" text={this.state.area.name}/>
                <Line subtitle="Уровень риска" text={this.state.riskLevel.name}/>
                <Line subtitle="Статус решения проблемы" text={this.state.resolutionStatus.name}/>
                <Button className="b-3" text="Подробнее"/>
            </div>
        );
    }
}

export {BoardObject}
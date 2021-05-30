import React from "react";
import style from "../styles/Line.module.scss";
import { EditField, InfoField, SelectField, TextareaField } from "./Field";

const Line = (props) => {
    return (
        <div className={style.line}>
            <div className={style.text}>{props.subtitle}</div>
            {props.editable
                ? <TextareaField id={props.id} className="f-2" text={props.text} style={props.infoStyle} />
                : <InfoField id={props.id} className="f-2" text={props.text} style={props.infoStyle} />
            }
        </div>
    );
}

const SelectLine = (props) => {
    return (
        <div className={style.line}>
            <div className={style.text}>{props.subtitle}</div>
            <SelectField id={props.id} items={props.items} className="f-2"/>
        </div>
    );
}

export { Line, SelectLine }
import React from "react";
import style from "../styles/Line.module.scss";
import { EditField, InfoField, SelectField } from "./Field";

const Line = (props) => {
    return (
        <div className={style.line}>
            <div className={style.text}>{props.subtitle}</div>
            {props.editable
                ? <EditField className="f-2" text={props.text} style={props.infoStyle} />
                : <InfoField className="f-2" text={props.text} style={props.infoStyle} />
            }
        </div>
    );
}

export { Line }
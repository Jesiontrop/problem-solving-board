import React from "react";
import styles from "../styles/Button.module.scss";

const Button = (props) => {
    const text = props.text ? props.text : "Button";

    const className = props.className ? props.className : "b-1"

    const onCustomClick = props.onClick ? props.onClick : function () {};

    return (
        <button className={styles[className]} style={props.style} onClick={onCustomClick}>
            <div className={styles.text}>{text}</div>
        </button>
    );
};

export {Button};
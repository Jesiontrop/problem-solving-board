import React from "react";
import styles from "../styles/Field.module.scss";

class InfoField extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text;
        this.version = props.version ? props.version : "1";
        this.styleVersion = "field-" + this.version;
        this.style = props.style;
    }

    render() {
        return (
            <div className={styles[this.styleVersion]} style={this.style}>
                {this.text}
            </div>
        );
    }
}

class EditField extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text;
        this.placholder = props.placeholder
        this.version = props.version ? props.version : "1";
        this.styleVersion = "field-" + this.version;
        this.style = props.style;
    }

    render() {
        return (
            <input className={styles[this.styleVersion]} style={this.style} value={this.text} placeholder={this.placeholder}/>
        );
    }
}

export {EditField, InfoField};
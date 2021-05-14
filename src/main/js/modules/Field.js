import React from "react";
import styles from "../styles/Field.module.scss";

class InfoField extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text;
        this.className = props.className ? props.className : "f-1";
        this.style = props.style;
    }

    render() {
        return (
            <div className={styles[this.className]} style={this.style}>
                {this.text}
            </div>
        );
    }
}

class EditField extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text;
        this.placeholder = props.placeholder;
        this.className = props.className ? props.className : "f-1";
        this.style = props.style;
    }

    render() {
        return (
            <input type="text" className={styles[this.className]} style={this.style} value={this.text} placeholder={this.placeholder}/>
        );
    }
}

export {EditField, InfoField};
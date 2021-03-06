import React from "react";
import styles from "../styles/Field.module.scss";
import client from "../client";

class InfoField extends React.Component {
    constructor(props) {
        super(props);
        this.className = props.className ? props.className : "f-1";
        this.style = props.style;
    }

    render() {
        const text = this.props.text;
        return (
            <div className={styles[this.className]} style={this.style}>
                {text}
            </div>
        );
    }
}

class EditField extends React.Component {
    constructor(props) {
        super(props);
        this.placeholder = props.placeholder;
        this.className = props.className ? props.className : "f-1";
        this.style = props.style;
        this.id = props.id;
        this.type = this.props.type ? this.props.type : "text";
    }

    render() {
        return (
            <input type={this.type} id={this.id} name={this.props.name} className={styles[this.className]} style={this.style} placeholder={this.placeholder} />
        );
    }
}

class TextareaField extends React.Component {
    constructor(props) {
        super(props);
        this.className = this.className = props.className ? props.className : "f-1";
        this.style = props.style;
        this.id = props.id;
    }

    render() {
        return (
            <span id={this.id} className={styles[this.className] + ' ' + styles.textarea} style={this.style} role="textbox" contentEditable />
        );
    }
}

class SelectField extends React.Component {
    constructor(props) {
        super(props);
        this.className = props.className ? props.className : "f-1";
        this.style = props.style;
        this.id = props.id;
    }

    render() {
        const listItems = this.props.items.map((object) =>
            //object need to be type of application/hal+json
            <option key={object._links.self.href} value={object._links.self.href}>{object.name}</option>
        );
        return (
            <select id={this.id} size="1" className={styles[this.className]} style={this.style}>
                {this.props.placeholder
                    ? <option value="" disabled selected>{this.props.placeholder}</option>
                    : null
                }
                {listItems}
            </select>
        );
    }
}

export { EditField, InfoField, TextareaField, SelectField };
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
    }

    render() {
        const text = this.props.text;
        return (
            <input type="text" className={styles[this.className]} style={this.style} value={text} placeholder={this.placeholder}/>
        );
    }
}

class SelectField extends React.Component {
    constructor(props) {
        super(props);
        this.placeholder = props.placeholder;
        this.className = props.className ? props.className : "f-1";
        this.style = props.style;
    }

    render() {
        const listItems = this.props.items.map((object) =>
            //object need to be type of application/hal+json
            <option key={object._links.self.href}>{object.name}</option>
        );
        return (
          <select size="1" className={styles[this.className]}>
              {listItems}
          </select>
        );
    }
}

export {EditField, InfoField, SelectField};
import React from "react";
import styles from "../styles/Field.module.scss";

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
        this.text = props.text;
        this.placeholder = props.placeholder;
        this.className = props.className ? props.className : "f-1";
        this.style = props.style;
        this.items = props.items ? props.items : [];
        this.listItems = this.items.map((object) =>
            <option>{object}</option>
        );
    }

    render() {
        return (
          <select size="1" className={styles[this.className]}>
              {this.listItems}
          </select>
        );
    }
}

export {EditField, InfoField, SelectField};
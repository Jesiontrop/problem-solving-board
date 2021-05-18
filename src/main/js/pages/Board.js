import React from "react";
import client from "../client";
import styles from "../styles/Board.module.scss"
import {BoardObject} from "../modules/BoardObject";
import {Header} from "../modules/Header";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {boards: []};
    }

    componentDidMount() {
        client({method: "GET", path: "/api/boards"}).done(response => {
            this.setState({boards: response.entity._embedded.boards});
            console.debug(response.entity._embedded.boards);
        });
    }

    render() {
        const listItems = this.state.boards.map((object) =>
            //object need to be type of application/hal+json
            <BoardObject key={object._links.self.href} board={object}/>
        );
        return (
            <div>
                <Header headline="Доска решения проблем"/>
                <main className={styles.boardPage}>
                    {listItems}
                </main>
            </div>

        );
    }
}

export {Board}
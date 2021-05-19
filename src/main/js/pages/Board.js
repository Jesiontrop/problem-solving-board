import React from "react";
import client from "../client";
import styles from "../styles/Board.module.scss"
import {BoardObject} from "../modules/BoardObject";
import {Header} from "../modules/Header";
import {Button} from "../modules/Button";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {path: "/api/boards?size=5", boards: [], page: {}, _links: {}};
        this.onPrevButton = this.onPrevButton.bind(this);
        this.onNextButton = this.onNextButton.bind(this);
    }

    componentDidMount() {
        client({method: "GET", path: this.state.path}).done(response => {
            this.setState({
                boards: response.entity._embedded.boards,
                page: response.entity.page,
                _links: response.entity._links
            });
            console.debug(response.entity._embedded.boards);
        });
    }

    onPrevButton() {
        client({method: "GET", path: this.state._links.prev.href}).done(response => {
            this.setState({
                boards: response.entity._embedded.boards,
                page: response.entity.page,
                _links: response.entity._links
            });
            console.debug(response.entity._embedded.boards);
        });
    }

    onNextButton() {
        client({method: "GET", path: this.state._links.next.href}).done(response => {
            this.setState({
                boards: response.entity._embedded.boards,
                page: response.entity.page,
                _links: response.entity._links
            });
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
                <footer className={styles.boardFooter}>
                    {this.state._links.prev
                        ?  <Button onClick={this.onPrevButton} className="b-3" text="<"/>
                        : null
                    }
                     <div>
                        {this.state.page.number + 1}/{this.state.page.totalPages}
                    </div>
                    {this.state._links.next
                        ? <Button onClick={this.onNextButton} className="b-3" text=">"/>
                        : null
                    }
                </footer>
            </div>

        );
    }
}

export {Board}

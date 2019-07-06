import React, { Component } from "react";

import Button from '@material-ui/core/Button';

import BookData from '../data/data.json';

const Child = ({ id, name, isClicked }) => (
    <>
        <Button
            key={id}
            variant="outlined"
            size="large"
            color="primary"
            className={isClicked ? `highlight` : ``}
        >
            {`${name}`}
        </Button>
    </>

);

class GenreStepper extends Component {
    state = {
        clicked: {},
    };

    handleClick = i => {
        this.setState(prevState => {

            const clicked = { ...prevState.clicked };
            // console.log(`prevState.clicked, clicked`, prevState.clicked, clicked);
            clicked[i] = !clicked[i];
            return { clicked };
        });
    };

    render() {
        const book = BookData;


        const items = book.map((book, i) => {
            // console.log(book, i)
            return (
                <>
                    <span key={book.id} onClick={() => this.handleClick(i)}>
                        <Child id={book.id} name={book.name} isClicked={this.state.clicked[i]} />
                    </span>
                </>
            );
        });

        return (
            <div>
                <div>{items}</div>
            </div>
        );
    }
}

export default GenreStepper

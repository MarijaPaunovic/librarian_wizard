import React, { Component } from "react";

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import BookData from '../data/data.json';


const Child = ({ id, name, isClicked }) => (
    <>
        <Box item xs={3} >
            <Button
                key={id}
                variant="outlined"
                size="large"
                color="primary"
                className={isClicked ? 'highlight' : ''}
            >
                {`${name}`}
            </Button>
        </Box>
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

    close = e => {
        e.preventDefault();
        this.props.homePage();
    }

    render() {
        const book = BookData.genres;

        const items = book.map((book, i) => {
            // console.log(book, i)
            return (
                <>

                    <span key={book.id}
                        onClick={() => this.handleClick(i)}
                        className='gridContainer'
                    >
                        <Child
                            id={book.id}
                            name={book.name}
                            isClicked={this.state.clicked[i]}
                        />
                    </span>

                </>
            );
        });

        return (
            <React.Fragment>
                <Box container item spacing={3} className='gridSpace'>
                    <div>{items}</div>
                </ Box>
            </React.Fragment>
        );
    }
}

export default GenreStepper

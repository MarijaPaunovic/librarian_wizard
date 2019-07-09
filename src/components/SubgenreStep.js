import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

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

class SubgenreStep extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: {},
        }
    }

    handleClick = i => {
        this.setState(prevState => {

            const clicked = { ...prevState.clicked };
            // console.log(`prevState.clicked, clicked`, prevState.clicked, clicked);
            clicked[i] = !clicked[i];
            return { clicked };
        });
    };

    render() {
        const book = BookData.genres;
        const { key } = this.props

        const items = book.forEach((bookObj, key) => {
            bookObj.subgenres.map((book, i) => {
                const { name, id } = book
                console.log(name, id);
                return (
                    <>
                        <Box key={id} onClick={() => this.handleClick(i)}>
                            <Child
                                id={id}
                                name={name}
                                isClicked={this.state.clicked[i]} />                                
                        </Box> 
                        </>
                );
            })
        });

        return (
            <React.Fragment>
                    <div>
                    {items}
                    </div>
            </React.Fragment>

        );
    }
}

export default SubgenreStep

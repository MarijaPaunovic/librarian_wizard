import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import deepOrange from '@material-ui/core/colors/deepOrange';

import BookData from '../data/data.json';
// import { Typography } from "@material-ui/core";




const Child = ({ id, name, isClicked }) => (
    <>
        <Button
            key={id}
            variant="outlined"
            size="large"
            color="primary"
            // className={isClicked ? `highlight` : ``}
            // onClick={this.handleClick}
            className={isClicked ? 'highlight' : ''}
        >
            {`${name}`}
        </Button>
    </>

);

class GenreStepper extends Component {

    state = {
        clicked: {},
        // clicked: false,
        
    };

    // continue = e => {
    //     e.preventDefault();
    //     this.props.nextStep();
    // }

    // back = e => {
    //     e.preventDefault();
    //     this.props.prevStep();
    // }

    handleClick = i => {
        // const currentClicked = this.state.clicked
        // // const clicked = { ...prevState.clicked };
        // this.setState({ 
        //     // clicked: `highlight`
        //     clicked: !currentClicked[i]
        // })

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
        
        // const { values } = this.props;
        // const clicked = this.state

        const items = book.map((book, i) => {
            // console.log(book, i)
            return (
                <>
                    <span key={book.id} 
                    onClick={() => this.handleClick(i)}
                    // onClick={this.handleClick}
                    // className={this.state.clicked ? 'highlight' : ''}
                        
                    // style={{ background: clicked ? 'highlight' : ''}}
                    // className={clicked ? this.styles.button1 : this.styles.button2}

                    >
                        <Child 
                        id={book.id} 
                        name={book.name} 
                        // style={
                        //     this.state.clicked[i] === i && this.state.clicked
                        //     ? {backgroundColor: 'blue'}
                        //     : {backgroundColor: 'red'}
                        // }
                        // className={this.state.clicked ? 'highlight' : ''}
                        // onClick={this.handleClick}
                        // onClick={() => this.handleClick}
                        isClicked={this.state.clicked[i]} 
                        // style={{ background: clicked ? 'highlight' : ''}}
                        // className={clicked ? 'highlight' : ''}
                        />
                    </span>
                </>
            );
        });

        return (
            <React.Fragment>
                {/* <div className='wizard-container'>
                    <div className='card wizard-card'>
                        <div className={styles.root}>

                            <div className='clearButton'>
                                <i className="material-icons" onClick={this.close}>clear</i>
                            </div>

                            <Typography variant="h5" component="h5" className='titlePage'>
                                Add book - New Book
                            </Typography> */}



                            <div>{items}</div>
{/* 
                            <div className='buttonContainer'>
                                <Button
                                    variant="outlined"
                                    color={primary}
                                    disabled
                                    className='buttonMargin'
                                >
                                    <i className="material-icons">keyboard_arrow_left</i>
                                    Back
                            </Button>

                                <Button
                                    variant="contained"
                                    color={primary}
                                    className='button-color'
                                    label='Open Library Wizard'
                                    onClick={this.continue}
                                >
                                    Next
                            </Button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </React.Fragment>
        );
    }
}

// const styles = makeStyles(theme => ({
//     button: {
//         margin: theme.spacing(5),
//     },
//     input: {
//         display: 'none',
//     },
//     root: {
//         width: '100%',
//         maxWidth: 500,
//     },

// }));

// const primary = deepOrange[500]

export default GenreStepper

import React, { Component } from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import deepOrange from '@material-ui/core/colors/deepOrange';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';

// import LibraryForm from './components/LibraryForm';


export class HomePage extends Component {
    // continue = e => {
    //     e.preventDefault();
    //     this.props.nextStep();
    // }

    render() {
        // const { values, handleChange } = this.props;

        return (
            <Container className='wizard-container homePageContainer'>
                <div className='card wizard-card'>
                    {/* <div className={styles.root}> */}

                        <Typography variant="h2" gutterBottom className='homePageTitle'>
                            Welcome to Library Wizard
                    </Typography>
                        <Typography variant="subtitle1" gutterBottom className='homePageText'>
                            Wizard will alow you to navigate through various steps in order to choose or add a new book to the system.
                        </Typography>

                        <Button
                            variant="contained"
                            // color={primary}
                            className='button-color homeButton'
                            
                            // label='Open Library Wizard'
                        // onClick={this.continue}
                        >
                            <Link 
                            to="libraryForm"
                            className='button-color homePageButton'
                            // component="button"
                            // variant="body2"
                            // className='button-color'
                            // onClick={() => {
                            //     alert("I'm a button.");
                            // }}
                        >
                            <i class="material-icons">
                                local_library &nbsp;
                            </i>
                            GO TO LIBRARY
                        </Link>
                    </Button>

                    {/* </div> */}
                </div>
            </Container>
        )
    }
}

// const styles = makeStyles(theme => ({
//     button: {
//         margin: theme.spacing(10),
//         justifyContent: 'flex-center'
//     },
//     input: {
//         display: 'none',
//     },
//     root: {
//         width: '100%',
//         maxWidth: 500,
//         alignContent: 'center'
//     },

// }));

// const primary = deepOrange[500]

export default HomePage

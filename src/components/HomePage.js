import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';


export class HomePage extends Component {

    render() {

        return (
            <Container className='wizard-container homePageContainer'>
                <div className='card wizard-card'>

                        <Typography variant="h2" gutterBottom className='homePageTitle'>
                            Welcome to Library Wizard
                    </Typography>
                        <Typography variant="subtitle1" gutterBottom className='homePageText'>
                            Wizard will alow you to navigate through various steps in order to choose or add a new book to the system.
                        </Typography>

                        <Button
                            variant="contained"
                            className='button-color homeButton'
                        >
                            <Link 
                            to="libraryForm"
                            className='button-color homePageButton'
                        >
                            <i class="material-icons">
                                local_library &nbsp;
                            </i>
                            GO TO LIBRARY
                        </Link>
                    </Button>

                </div>
            </Container>
        )
    }
}

export default HomePage

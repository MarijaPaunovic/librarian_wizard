import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 import Container from '@material-ui/core/Container';
 import Box from '@material-ui/core/Box';

import GenreStepper from './GenreStepper';
import SubgenreStep from './SubgenreStep';
import AddNew from './AddNew';
import Information from './Information'

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class LibraryForm extends Component {

    state = {
        activeStep: 0,
        // Add new book
        subName: '',
        subDescription: '',
        // Information about new book
        bookTitle: '',
        author: '',
        isbn: '',
        publisher: '',
        datePublished: '',
        numberOfPages: 0,
        format: '',
        edition: '',
        editionLanguage: '',
        description: '',
    }

    // Proceed to next step
    handleNext = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep + 1
        });
    };

    // Go to prev step
    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1
        });
    };

    // Back to home page
    handleReset = () => {
        this.setState({
            activeStep: 0
        });
    }

    // Handle input change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    getStepContent = (step) => {
        const { subName, subDescription, bookTitle, author, isbn, publisher, datePublished, numberOfPages, format, edition, editionLanguage, description } = this.state;
        const values = { subName, subDescription, bookTitle, author, isbn, publisher, datePublished, numberOfPages, format, edition, editionLanguage, description }

        switch (step) {
            case 0:
                return <GenreStepper />;
            case 1:
                return <SubgenreStep />;
            case 2:
                return <AddNew handleChange={this.handleChange} values={values} />;
            case 3:
                return <Information handleChange={this.handleChange} values={values} />;
            default:
                throw new Error('Unknown step');
        }
    }


    render(props) {
        const steps = ['Genre', 'Subgenre', 'Add new subgenre (Optional)', 'Information (Optional)'];
        // const classes = useStyles();
        const { activeStep } = this.state;
        // const { classes } = this.props;

        return (
            <>
                <React.Fragment>
                <Container spacing={3} className='wizard-container'>
                <div className='card wizard-card'>
                        {/* <Paper 
                        // className={useStyles.paper}
                        > */}

                            <div className='clearButton'>
                                <Link to="/">
                                    <i className="material-icons clearButton">clear</i>
                                </Link>
                            </div>


                            <Typography component="h1" variant="h4" align="center" className='titlePage'>
                                Add book - New book
                    </Typography>
                            <Stepper activeStep={activeStep} 
                            alternativeLabel
                            >
                                {steps.map(label => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            <React.Fragment>
                                {activeStep === steps.length ? (
                                    <React.Fragment>
                                        <div className='wizard-container success'>
                                            <Typography gutterBottom>
                                                <i className="material-icons successIcon">
                                                    check_circle
                                        </i>
                                            </Typography>

                                            <Typography variant="h6" gutterBottom>
                                                Book added successfully
                                    </Typography>

                                            <Button
                                                variant="contained"
                                                className='button-color'
                                                onClick={this.handleReset}
                                            >
                                                Add another book
                                    </Button>
                                        </div>
                                    </React.Fragment>
                                ) : (
                                        <React.Fragment>
                                            {this.getStepContent(activeStep)}
                                            <Box display="flex" justifyContent="flex-end">
                                                {activeStep !== 0 && (
                                                    <Button 
                                                    variant="outlined"
                                                    onClick={this.handleBack}
                                                    className='buttons backButton'
                                                    >
                                                    <i className="material-icons">
                                                        keyboard_arrow_left &nbsp; 
                                                    </i>
                                                        Back
                                             </Button>
                                                )}
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={this.handleNext}
                                                    className='buttons'
                                                >
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                            </Box>
                                        </React.Fragment>
                                    )}
                            </React.Fragment>
                        {/* </Paper> */}

                    </div>
            </Container>
                </React.Fragment>
            </>
        );
    }
}



export default LibraryForm

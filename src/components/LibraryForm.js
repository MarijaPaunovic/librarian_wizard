import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import HomePage from './HomePage';
// import Genre from './Genre';
import GenreStepper from './GenreStepper';
import SubgenreStep from './SubgenreStep'
import AddNew from './AddNew';
import Information from './Information'
// import Success from './Success'

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
// import AddressForm from './Checkout/AddressForm';
// import PaymentForm from './Checkout/PaymentForm';
import Review from './Checkout/Review';
import { withStyles, styled } from '@material-ui/styles';
// import SubgenreStep from './SubgenreStep';


const useStyles = makeStyles(theme => ({
    primary: {
        color: 'deepOrange[500]'
    },
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

class LibraryForm extends Component {

    state = {
        activeStep: 0,
        subName: '',
        subDescription: '',
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
        const { subName, subDescription } = this.state;
        const values = { subName, subDescription }

        switch (step) {
            case 0:
                return <GenreStepper />;
            case 1:
                return <SubgenreStep />;
            case 2:
                return <AddNew handleChange={this.handleChange} values={values} />;
            case 3:
                return <Information />;
            case 4:
                return <Review />;
            default:
                throw new Error('Unknown step');
        }
    }


    render(props) {
        const steps = ['Genre', 'Subgenre', 'Add new subgenre', 'Information'];
        // const classes = useStyles();
        const { activeStep } = this.state;
        // const { classes } = this.props;

        return (
            <>
                <React.Fragment>
                    <main 
                    // className={classes.layout}
                    >
                        <Paper 
                        className={useStyles.paper}
                        >

                            <div className='clearButton'>
                                <Link to="/">
                                    <i className="material-icons clearButton">clear</i>
                                </Link>
                            </div>


                            <Typography component="h1" variant="h4" align="center" className='titlePage'>
                                Add book - New book
                    </Typography>
                            <Stepper activeStep={activeStep} 
                            // className={useStyles.stepper}
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
                                            <div 
                                            // className={useStyles.buttons}
                                            >
                                                {activeStep !== 0 && (
                                                    <Button onClick={this.handleBack}
                                                    // className={useStyles.button}
                                                    >
                                                        Back
                                             </Button>
                                                )}
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={this.handleNext}
                                                    // className={useStyles.button}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                            </div>
                                        </React.Fragment>
                                    )}
                            </React.Fragment>
                        </Paper>

                    </main>
                </React.Fragment>
            </>
        );
    }
}



export default LibraryForm

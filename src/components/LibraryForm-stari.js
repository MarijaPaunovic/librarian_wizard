import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';

// import HomePage from './HomePage';
// import Genre from './Genre';
import GenreStepper from './GenreStepper';
import SubgenreStep from './SubgenreStep'
import AddNew from './AddNew';
import Information from './Information'
// import Success from './Success'

import { makeStyles } from '@material-ui/core/styles';
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


// export class LibraryForm extends Component {
export default function LibraryForm() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    // const [subName, setSubName] = React.useState('');
    // const [subDescription, setSubDescription] = React.useState('');
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            subName: '',
            subDescription: '',
        }
    )

    // Proceed to next step
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    // Go to prev step
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    // Back to home page
    const handleReset = () => {
        setActiveStep(0);
    }

    // // Handle sub name on input
    // const handleSubName = input => e => {
    //     setSubName(
    //         [input]=e.target.value
    //     )
    // }

    // // Handle sub description on input
    // const handleSubDescription = input => e => {
    //     setSubDescription(
    //         [input]=e.target.value
    //     )
    // }
    
    // Handle input change
    const handleChange = e => {
        const { name, value } = e.target;
 
        setUserInput( prevState => ({
            ...prevState,
            [name] : value
        }));
    }

    const steps = ['Genre', 'Subgenre', 'Add new subgenre', 'Information'];

function getStepContent(step) {
    const { subName, subDescription } = userInput;

    switch (step) {
        case 0:
            return <GenreStepper />;
        case 1:
            return <SubgenreStep />;
        case 2:
            return <AddNew  handleChange={handleChange} value1={subName} value2={subDescription} />;
        case 3:
            return <Information />;
        case 4:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}


    
    // const nextStep = () => {
    //     const { step } = this.state;
    //     this.setState({
    //         step: step + 1
    //     });
    // }

    // // Go to prev step
    // const prevStep = () => {
    //     const { step } = this.state;
    //     this.setState({
    //         step: step - 1
    //     });
    // }

    // // Homepage
    // const homePage = () => {
    //     this.setState({
    //         step: 1
    //     });
    // }

    // Handle fields change
    

    const close = e => {
        e.preventDefault();
        this.props.homePage();
    }

    // render() {
    // const { step } = this.state;
    // const { subName } = this.state;
    // const values = { subName };

    //     switch (step) {
    //         case 1:
    //             return (
    //                 <HomePage
    //                     nextStep={this.nextStep}
    //                     handleChange={this.handleChange}
    //                     values={values}
    //                 />
    //             )
    //         case 2:
    //             return (
    //                 <GenreStepper
    //                     nextStep={this.nextStep}
    //                     prevStep={this.prevStep}
    //                     homePage={this.homePage}
    //                     handleChange={this.handleChange}
    //                     values={values}
    //                 />
    //             )
    //         case 3:
    //             return (
    //                 <SubgenreStep
    //                     nextStep={this.nextStep}
    //                     handleChange={this.handleChange}
    //                     values={values}
    //                 />
    //             )
    //         // case 4:
    //         // return (
    //         //     // <SubgenreStep
    //         //     //     nextStep={this.nextStep}
    //         //     //     handleChange={this.handleChange}
    //         //     //     values={values}
    //         //     // />
    //         // )
    //         case 5:
    //             return <Success />
    //         default:
    //             throw new Error('Unknown step');
    //     }

    // }

    return (
        <React.Fragment>
            <main className={classes.layout}>
                <Paper className={classes.paper}>

                    <div className='clearButton'>
                        <Link to="/">
                            <i className="material-icons clearButton">clear</i>
                        </Link>
                    </div>


                    <Typography component="h1" variant="h4" align="center" className='titlePage'>
                        Add book - New book
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
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
                                        onClick={handleReset}
                                        >
                                        Add another book
                                    </Button>
                                </div>
                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <div className={classes.buttons}>
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} className={classes.button}>
                                                Back
                                             </Button>
                                        )}
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
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
    );
}


// export default LibraryForm

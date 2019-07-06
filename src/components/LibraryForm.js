import React, { Component } from 'react';

import HomePage from './HomePage';
// import Genre from './Genre';
import GenreStepper from './GenreStepper';
import SubgenreStep from './SubgenreStep'
import AddNew from './AddNew';
import Success from './Success'

export class LibraryForm extends Component {
    state = {
        step: 1,
        subName: '',
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Homepage
    homePage = () => {
        this.setState({
            step: 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }
    render() {
        const { step } = this.state;
        const { subName } = this.state;
        const values = { subName };

        switch (step) {
            case 1:
                return (
                    <HomePage
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <GenreStepper
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        homePage={this.homePage}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <SubgenreStep
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            // case 4:
            // return (
            //     // <SubgenreStep
            //     //     nextStep={this.nextStep}
            //     //     handleChange={this.handleChange}
            //     //     values={values}
            //     // />
            // )
            case 5:
                return <Success />
            default:
                return (
                    <HomePage
                    // nextStep={this.nextStep}
                    // handleChange={this.handleChange}
                    // values={values}
                    />
                )
        }

    }
}

export default LibraryForm

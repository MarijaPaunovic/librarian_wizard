import React, { Component } from 'react';

import HomePage from './HomePage';
import Genre from './Genre';
// import Example1 from './Example1';

export class LibraryForm extends Component {
    state = {
        step: 1,
        genre: '',
        subgenre: '',
        addGenre: '',
        information: ''
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

    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }
    render() {
        const { step } = this.state;
        const { genre, subgenre, addGenre, information } = this.state;
        const values = { genre, subgenre, addGenre, information };

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
                        <Genre
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    )
            case 3:
                return <h1>Add Subgenre</h1>
            case 4:
                return <h1>Information</h1>
            case 5:
                return <h1>Success</h1>
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

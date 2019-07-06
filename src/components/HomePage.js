import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import deepOrange from '@material-ui/core/colors/deepOrange';


export class HomePage extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        // const { values, handleChange } = this.props;

        return (
            <div className='wizard-container'>
                <div className='card wizard-card'>
                    <div className={styles.root}>

                        <Typography variant="h2" gutterBottom className='homePageTitle'>
                            Welcome to Library Wizard
                    </Typography>
                        <Typography variant="subtitle1" gutterBottom className='homePageText'>
                            Wizard will alow you to navigate through various steps in order to choose or add a new book to the system.
                        </Typography>
                        <Button
                            variant="contained"
                            color={primary}
                            className='button-color'
                            label='Open Library Wizard'
                            onClick={this.continue}
                        >
                            GO TO LIBRARY
                    </Button>

                    </div>
                </div>
            </div>
        )
    }
}

const styles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    root: {
        width: '100%',
        maxWidth: 500,
    },
      
}));

const primary = deepOrange[500]

export default HomePage

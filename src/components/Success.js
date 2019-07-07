import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import deepOrange from '@material-ui/core/colors/deepOrange';
// import { Step } from '@material-ui/core';



export class Success extends Component {

    render() {
        const { handleReset } = this.props;
        // const classes = useStyles();

        return (
            <>
                <div className='wizard-container success'>
                    {/* <div className='card wizard-card'> */}
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
                        color={primary}
                        className='button-color'>
                        <Link
                            to={handleReset}
                            className='button-color homePageButton'
                        >
                            Add another book
                    </Link>
                    </Button>
                {/* </div> */}
            </div>
            </>
        )
    }
}

// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'flex-end',
//     },
//     icon: {
//         margin: theme.spacing(2),
//     },
//     iconHover: {
//         margin: theme.spacing(2),
//         '&:hover': {
//             color: red[800],
//         },
//     },
//     button: {
//         margin: theme.spacing(1),
//       },
//       input: {
//         display: 'none',
//       },
// }));

const primary = deepOrange[500]

export default Success

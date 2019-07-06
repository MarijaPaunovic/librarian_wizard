import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';

// import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
// import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
// import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
// import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
// import FormatBoldIcon from '@material-ui/icons/FormatBold';
// import FormatItalicIcon from '@material-ui/icons/FormatItalic';
// import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
// import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

// import { blue, red } from '@material-ui/core/colors';
// import SvgIcon from '@material-ui/core/SvgIcon';


export class Success extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        // const { values, handleChange } = this.props;
        // const classes = useStyles();

        return (
            <>

                <Typography gutterBottom>
                    <i className="material-icons successIcon">
                        check_circle
                </i>
                </Typography>

                <Typography variant="h6" gutterBottom>
                    Book added successfully
                    </Typography>

                <Button variant="contained" color="primary" >
                    Add another book
                    </Button>
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

export default Success

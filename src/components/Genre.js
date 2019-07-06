import React, { Component } from 'react';

import MyStepper from './Stepper'

import { ThemeProvider } from '@material-ui/styles';
// import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// import { makeStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


// const useStyles = makeStyles(theme => ({
//     toggleContainer: {
//         margin: theme.spacing(2, 0),
//     },
// }));

// const [alignment, setAlignment] = React.useState('left');
// const [formats, setFormats] = React.useState(() => ['bold']);

// const handleFormat = (event, newFormats) => {
//     setFormats(newFormats);
// };

// const handleAlignment = (event, newAlignment) => {
//     setAlignment(newAlignment);
// };


export class Genre extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        // const { values, handleChange } = this.props;
        // const classes = useStyles();

        return (
            <div className='wizard-container'>
                <div className='card wizard-card'>

                    <MyStepper />
                  

                </div>
            </div>
        )
    }
}


export default Genre

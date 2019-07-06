import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export class Information extends Component {
    state = {
        checkedG: true,
    }

    // continue = e => {
    //     e.preventDefault();
    //     this.props.nextStep();
    // }

    // back = e => {
    //     e.preventDefault();
    //     this.props.prevStep();
    // }

    handleChange = name => event => {
        const state = this.state;
        this.setState({ ...state, [name]: event.target.checked });
    };


    render() {
        // const { values, handleChange } = this.props;

        return (
            <>
                <TextField
                    id="outlined-full-width"
                    label="Book Title"
                    style={{ margin: 8 }}
                    placeholder="Book title"
                    // helperText="Full width!"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br />
                <TextField
                    id="outlined-full-width"
                    label="Author"
                    style={{ margin: 8 }}
                    placeholder="Author"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br />
                <TextField
                    id="outlined-full-width"
                    label="ISBN"
                    style={{ margin: 8 }}
                    placeholder="ISBN"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br />
                <TextField
                    id="outlined-full-width"
                    label="Publisher"
                    style={{ margin: 8 }}
                    placeholder="Publisher"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br />
                <TextField
                    id="outlined-name"
                    label="Data publisher"
                    // className={classes.textField}
                    // value={values.name}
                    // onChange={handleChange('subName')}
                    margin="normal"
                    variant="outlined"
                // hintText='Subgenre Name'
                // floatingLabelText='First Name'
                // onChange={handleChange('subName')}
                // defaultValue={values.subName}
                />
                <br />
                <TextField
                    id="outlined-number"
                    label="Number of pages"
                    // value={values.age}
                    // onChange={handleChange('age')}
                    type="number"
                    // className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    // className={classes.textField}
                    // value={values.currency}
                    // onChange={handleChange('currency')}
                    // SelectProps={{
                    //     MenuProps: {
                    //         className: classes.menu,
                    //     },
                    // }}
                    // helperText="Please select your currency"
                    margin="normal"
                    variant="outlined"
                >
                    {/* {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))} */}
                </TextField>
                <br />
                <TextField
                    id="outlined-name"
                    label="Edition"
                    // className={classes.textField}
                    // value={values.name}
                    // onChange={handleChange('subName')}
                    margin="normal"
                    variant="outlined"
                // hintText='Subgenre Name'
                // floatingLabelText='First Name'
                // onChange={handleChange('subName')}
                // defaultValue={values.subName}
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Edition language"
                    // className={classes.textField}
                    // value={values.currency}
                    // onChange={handleChange('currency')}
                    // SelectProps={{
                    //     MenuProps: {
                    //         className: classes.menu,
                    //     },
                    // }}
                    // helperText="Please select your currency"
                    margin="normal"
                    variant="outlined"
                >
                    {/* {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))} */}
                </TextField>
                <br />
                <TextField
                    id="outlined-dense-multiline"
                    label="Description"
                    // className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    multiline
                    rowsMax="4"
                />
                <br />
                
            </>
        )
    }
}


export default Information
import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export class AddNew extends Component {
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
                    {/* <TextField
                        id="outlined-full-width"
                        label="Subgenre name"
                        style={{ margin: 8 }}
                        placeholder="Subgenre name"
                        // helperText="Full width!"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    /> */}
                    <TextField
                        id="outlined-name"
                        label="Subgenre name"
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
                        id="outlined-dense-multiline"
                        label="Type the description..."
                        // className={clsx(classes.textField, classes.dense)}
                        margin="dense"
                        variant="outlined"
                        multiline
                        rowsMax="4"
                    />
                    <br />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.checkedG}
                                onChange={this.handleChange('checkedG')}
                                value="checkedG"
                            />
                        }
                        label="Description is required for this subgenre"
                    />
               </>
        )
    }
}


export default AddNew
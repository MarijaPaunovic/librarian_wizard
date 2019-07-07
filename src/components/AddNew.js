import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export class AddNew extends Component {
    state = {
        checkedG: true,
    }

    handleChange = name => event => {
        const state = this.state;
        this.setState({ ...state, [name]: event.target.checked });
    };


    render() {
        const { values, handleChange } = this.props;

        return (
            <>
                     <TextField
                        id="outlined-name"
                        fullWidth
                        label="Subgenre name"
                        onChange={handleChange('subName')}
                        defaultValue={values.subName}
                        margin="normal"
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        id="outlined-dense-multiline"
                        fullWidth
                        label="Type the description..."
                        onChange={handleChange('subDescription')}
                        defaultValue={values.subDescription}
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
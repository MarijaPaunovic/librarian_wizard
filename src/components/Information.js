import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export class Information extends Component {
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
            <React.Fragment>
            <Grid container spacing={3}>

            <Grid item xs={12} fullWidth>
                <Typography variant="h6" gutterBottom>
                    Information about new book
                </Typography>
            </Grid>

            <Grid item xs={12} fullWidth>
                <TextField
                    id="outlined-full-width"
                    label="Book Title"
                    placeholder="Book title"
                    onChange={handleChange('bookTitle')}
                    defaultValue={values.bookTitle}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                </Grid>

                <Grid item xs={12} fullWidth>
                <TextField
                    id="outlined-full-width"
                    label="Author"
                    // style={{ margin: 8 }}
                    placeholder="Author"
                    onChange={handleChange('author')}
                    defaultValue={values.author}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                </Grid>
                <Grid item xs={12} fullWidth>
                <TextField
                    id="outlined-full-width"
                    label="ISBN"
                    onChange={handleChange('isbn')}
                    defaultValue={values.isbn}
                    // style={{ margin: 8 }}
                    placeholder="ISBN"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                </Grid>

                <Grid item xs={12} fullWidth>
                <TextField
                    id="outlined-full-width"
                    label="Publisher"
                    // style={{ margin: 8 }}
                    placeholder="Publisher"
                    onChange={handleChange('publisher')}
                    defaultValue={values.publisher}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                </Grid>

                <Grid item xs={8} justify='flex-start' fullWidth>
                <TextField
                    id="date"
                    label="Date published"
                    type="date"
                    defaultValue="2000-12-31"
                    onChange={handleChange('datePublished')}
                    margin="normal"
                    variant="outlined"
                    className='columnWidth'
                />
                </Grid>
                <br/>

                <Grid item xs={8} justify='flex-start' fullWidth>
                <TextField
                    id="outlined-number"
                    label="Number of pages"
                    onChange={handleChange('numberOfPages')}
                    defaultValue={values.numberOfPages}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                />
                </Grid>

                <Grid item xs={8} justify='flex-start' fullWidth>
                <TextField
                    id="outlined-name"
                    label="Format"
                    onChange={handleChange('format')}
                    defaultValue={values.format}
                    margin="normal"
                    variant="outlined"
                    className='columnWidth'
                />
                </Grid>
                <br/>

                
                <Grid item xs={6} justify='flex-start' fullWidth>
                <TextField
                    id="outlined-name"
                    label="Edition"
                    onChange={handleChange('edition')}
                    defaultValue={values.edition}
                    margin="normal"
                    variant="outlined"
                    className='columnWidth'
                />
                </Grid>

                <Grid item xs={6} justify='space-evenly' fullWidth>
                <TextField
                    id="outlined-name"
                    label="Edition language"
                    onChange={handleChange('editionLanguage')}
                    defaultValue={values.editionLanguage}
                    margin="normal"
                    variant="outlined"
                    className='columnWidth'
                />
                </Grid>

                <Grid item xs={12} fullWidth>
                <TextField
                    id="outlined-dense-multiline"
                    label="Description"
                    fullWidth
                    onChange={handleChange('description')}
                    defaultValue={values.description}
                    margin="dense"
                    variant="outlined"
                    multiline
                    rowsMax="4"
                />
                </Grid>

                </Grid>
                </React.Fragment>
            </>
        )
    }
}


export default Information
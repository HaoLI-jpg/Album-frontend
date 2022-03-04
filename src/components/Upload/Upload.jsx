import React from "react";
import {Container, Grid} from "@material-ui/core"
import Form from './Form/Form'
import useStyles from "./Form/style";

const Upload = () => {
    const classes = useStyles();
    return(
        <Container maxWidth="lg">
            <Grid alignItems="stretch" spacing={3} className={classes.form}>
                <Form />
            </Grid>
        </Container>
    )
}

export default Upload;
import React, {useState} from "react";
import api from '../../../api/index'
import {Paper, TextField, Button, Typography} from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from "./style";

const Form = () => {
    const [postData, setPostData] = useState({
        creator:'', title:'', message:'', selectedFile:''
    });
    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(postData.selectedFile){
            await api.post('/posts', postData);
            alert("Picture submitted!")
        } else {
            alert("Please submit a picture!")
        }
        clear();
    }

    const clear =() => {
        setPostData({creator:'', title:'', message:'', selectedFile:''})
    }
    return(
        <Paper className={classes.paper}>
            <form className={classes.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6"> Upload a picture </Typography>

                <TextField className={classes.input} name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator}
                        onChange={(e) => setPostData({...postData, creator: e.target.value})} />
                <TextField className={classes.input} name="title" variant="outlined" label="Title" fullWidth value={postData.title}
                        onChange={(e) => setPostData({...postData, title: e.target.value})} />
                <TextField className={classes.input} name="message" variant="outlined" label="Message" fullWidth value={postData.message}
                        onChange={(e) => setPostData({...postData, message: e.target.value})} />

                <div className={classes.file}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                    />
                </div>

                <Button className={classes.button} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button className={classes.button} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>


            </form>
        </Paper>
    )
}

export default Form;
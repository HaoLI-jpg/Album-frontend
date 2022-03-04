import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    form: {
        margin: theme.spacing(2),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    paper: {
        padding: theme.spacing(2)
    },
    input: {
        margin: theme.spacing(1)
    },
    file: {
        width: "97%",
        margin: theme.spacing(1)
    },
    button: {
        margin: theme.spacing(1),
        width: "50%"
    }
}));

export default useStyles;
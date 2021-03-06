import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        margin: '10px',
        fontWeight: "bold",
    },
    icons: {
        flexGrow: 1,
    },
    bar: {
        marginBottom: '30px'
    }
}));

export default useStyles;
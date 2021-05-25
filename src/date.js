import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    mod: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(0),
        width: 200,
    },
    sec_mod: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(0),
        width: 100,
    },
}));
export default function DatePickers() {
    const classes = useStyles();
    const [Day,Set_Day] = useState("民國89年-10月-12號")
    return (
        <form className={classes.container} noValidate>
            <TextField value={Day}
                id=" "
                label="阿公店開店的日期"
                className={classes.mod}
                InputLabelProps={{
                    shrink: true
                  }}
            />
            <TextField 
                id="date"
                label=" "
                type="date"
                className={classes.sec_mod}
                onChange={event => {
                    Set_Day(Date(event.target.value))
                }}
                InputLabelProps={{
                shrink: true
                }}
            />
        </form>
    );
}
function Date(date) {
    const [year, month ,day]=date.split('-')
        return(`民國${year-1911}年-${month}月-${day}號`);
}
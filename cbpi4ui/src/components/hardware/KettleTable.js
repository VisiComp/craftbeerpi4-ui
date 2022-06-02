import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import { CBPiContext, useCBPi } from '../data';
import { kettleapi } from '../data/kettleapi';
import ActorValue from '../util/ActorValue';
import DeleteDialog from '../util/DeleteDialog';
import SensorValue from '../util/SensorValue';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const KettleTable = () => {
    const classes = useStyles();
    const history = useHistory();
    const { state, actions } = useCBPi()

    const remove_callback = (id) => {
        actions.delete_kettle(id)
    }

    const { t, i18n } = useTranslation();

    return (
        <>
            <TableContainer >
                <Table className={classes.table} dense table size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{t("name")}</TableCell>
                            <TableCell align="right" className="hidden-xs">{t("logic")}</TableCell>
                            <TableCell align="right" className="hidden-xs">{t("heater")}</TableCell>
                            <TableCell align="right" className="hidden-xs">{t("agitator")}</TableCell>
                            <TableCell align="right" className="hidden-xs">{t("sensor")}</TableCell>
                            <TableCell align="right" className="hidden-xs">{t("target temp")}</TableCell>
                            <TableCell align="right" className="hidden-xs">{t("actions")}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.kettle.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    
                                        {row.name}
                                    
                                </TableCell>
                                <TableCell align="right" className="hidden-xs">{t("hardware_kettle_LogicSelect_"+row.type)}</TableCell>
                                <TableCell align="right" className="hidden-xs"><ActorValue id={row.heater}/></TableCell>
                                <TableCell align="right" className="hidden-xs" ><ActorValue id={row.agitator}/></TableCell>
                                <TableCell align="right" className="hidden-xs"><SensorValue id={row.sensor}/></TableCell>
                                <TableCell align="right" className="hidden-xs">{row.target_temp}</TableCell>
                                <TableCell align="right" className="hidden-xs">
                                    <DeleteDialog title={t("delete kettle")} message={t("delete text")} id={row.id} callback={remove_callback} />
                                    <IconButton aria-label="delete" size="small" onClick={() => { history.push("/kettle/"+row.id) }} >
                                      <VisibilityIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default  KettleTable
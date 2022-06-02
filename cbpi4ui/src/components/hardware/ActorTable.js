import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
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
import { CBPiContext } from '../data';
import { actorapi } from '../data/actorapi';
import ActorButton from '../util/ActorButton';
import ActorSwitch from '../util/ActorSwitch';
import DeleteDialog from '../util/DeleteDialog';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const ActorTable = () => {
    const classes = useStyles();
    const history = useHistory();
    const { state, actions } = useContext(CBPiContext);

    
    
    const remove_callback = (id) => {
        actorapi.remove(id)
        actions.delete_actor(id)
    }

    const { t, i18n } = useTranslation();

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} dense={true} table size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{t("name")}</TableCell>
                            <TableCell align="right" className="hidden-xs">{t("type")}</TableCell>
                            <TableCell align="right" className="hidden-xs">{t("GPIO")}</TableCell>
                            <TableCell align="right" className="hidden-xs">{t("state")}</TableCell>
                            <TableCell align="right" className="hidden-xs">{t("actions")}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.actors.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    
                                        {row.name}
                                
                                </TableCell>
                                <TableCell align="right" className="hidden-xs">{t("hardware_ActorTypeSelect_"+row.type)}</TableCell>
                                <TableCell align="right" className="hidden-xs">{row.props["GPIO"]}</TableCell>
                                <TableCell align="right" className="hidden-xs"><ActorSwitch id={row.id}/></TableCell>
                                <TableCell align="right" className="hidden-xs">
                                    <DeleteDialog title={t("delete actor")} message={t("delete actor text")} id={row.id} callback={remove_callback} />
                                    <IconButton aria-label="delete" size="small" onClick={() => { history.push("/actor/"+row.id) }} >
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

export default  ActorTable
import { Button, Divider, IconButton, makeStyles, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { useHistory } from "react-router-dom";
import {useTranslation} from 'react-i18next';
import Header from "../util/Header";
import ActorTable from "./ActorTable";
import KettleTable from "./KettleTable";
import SensorTable from "./SensorTable";
import FermenterTable from "./FermenterTable";

const useStyles = makeStyles((theme) => ({
  table: {},
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function Hardware() {
  const classes = useStyles();
  const history = useHistory();
  
  const { t, i18n } = useTranslation();

  return (
    <>
      <Grid container direction="row" justify="space-between" alignItems="center" style={{ marginTop: 10 }}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            {t("hardware")}
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>

      <Divider style={{ marginBottom: 10, marginTop: 10 }} />
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <Header title={t("kettle")}>
              <IconButton
                variant="contained"
                onClick={() => {
                  history.push("/kettle");
                }}
              >
                <AddIcon />
              </IconButton>
            </Header>
            <KettleTable />
          </Paper>
        </Grid>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <Header title={t("fermenter")}>
              <IconButton
                variant="contained"
                onClick={() => {
                  history.push("/fermenter");
                }}
              >
                <AddIcon />
              </IconButton>
            </Header>
            <FermenterTable />
          </Paper>
        </Grid>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <Header title={t("sensor")}>
              

              <IconButton
                variant="contained"
                onClick={() => {
                  history.push("/sensor");
                }}
              >
                <AddIcon />
              </IconButton>
            </Header>
            <SensorTable />
          </Paper>
        </Grid>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <Header title={t("actor")}>
            <IconButton
                variant="contained"
                onClick={() => {
                  history.push("/actor");
                }}
              >
                <AddIcon />
              </IconButton>
            </Header>
            <ActorTable />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

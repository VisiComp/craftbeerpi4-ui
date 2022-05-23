import { Button, IconButton, Grid, Typography, Divider, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {useTranslation} from 'react-i18next';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from '@material-ui/core/InputLabel';
import { systemapi } from "../data/systemapi"
import RestartDialog from "../util/RestartDialog";
import ShutdownDialog from "../util/ShutDownDialog"; // Correct include
import SaveIcon from "@material-ui/icons/Save";
import RestoreIcon from '@material-ui/icons/Restore';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const SelectBox = ({ options, value, onChange }) => {
  return (
    <>
      <Select labelId="demo-simple-select-label" id="demo-simple-select" value={value} onChange={onChange}>
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};


const CBPiSystem = () => {
  const classes = useStyles();

  const hiddenFileInput = React.useRef(null);
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    const FileName = fileUploaded.name;
    let formData = new FormData();
    formData.append("File", fileUploaded);
    systemapi.restoreConfig(formData, ReloadPage());
  };

  const svghiddenFileInput = React.useRef(null);
  const svghandleChange = event => {
    const svgfileUploaded = event.target.files[0];
    const FileName = svgfileUploaded.name;
    const FileSize = svgfileUploaded.size;
    let svgformData = new FormData();
    svgformData.append("File", svgfileUploaded);
    systemapi.uploadSVG(svgformData, ReloadPage());
  };

  const ReloadPage = () => {
    console.log("Reload page");
    /*window.location.reload();*/
  };

  const [systeminfo, setSystemInfo] = useState([]);

  useEffect(() => {
    systemapi.getsysteminfo((data) => {
      setSystemInfo(data);
      console.log(data['system']);
    });
  }, []);

  const shutdown = () => {
    systemapi.shutdown();
  };

  const restart = () => {
    systemapi.restart();
  };

  const backup = (event) => {
    systemapi.backupConfig();
  };

  const [logtime, setLogtime] = useState(1);
  const logtimelist = [{ 'value': 1, 'label': '1 h' },
  { 'value': 6, 'label': '6 h' },
  { 'value': 12, 'label': '12 h' },
  { 'value': 24, 'label': '24 h' },
  { 'value': 'b', 'label': 'last boot' }];

  const LogtimeChange = (event) => {
    setLogtime(event.target.value);
  };

  const downloadlog = (event) => {
    systemapi.downloadlog(logtime);
  };

  const { t, i18n } = useTranslation();

  return (
    <div>
      <Grid container direction="row" justify="space-between" alignItems="center" style={{ marginTop: 10 }}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            {t("system settings")} 
          </Typography>
        </Grid>

        <Grid item></Grid>
      </Grid>
      <Divider style={{ marginBottom: 10, marginTop: 10 }} />

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{t("system restart")} / {t("shutdown")}</TableCell>
              <TableCell>

              </TableCell>
              <TableCell align="right">


                <Grid>
                  {t("restart")}:
                  <RestartDialog
                    title={t("system restart")}
                    message={t("restart system text")}
                    callback={restart}
                  />
                  {t("shutdown")}:
                  <ShutdownDialog
                    title={t("shutdown system")}
                    message={t("shutdown system text")}
                    callback={shutdown}
                  />

                </Grid>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{t("backup config")}</TableCell>
              <TableCell>

              </TableCell>
              <TableCell align="right">


                <Grid>
                  {t("backup")}:
                  <IconButton onClick={backup}>
                    <SaveIcon />
                  </IconButton>

                </Grid>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{t("restore config")} {t("max 5mb")} {t( "(please restart system afterwards)")}</TableCell>
              <TableCell>

              </TableCell>
              <TableCell align="right">


                <Grid>
                  {t("restore")}:
                  <input accept=".zip" ref={hiddenFileInput} className={classes.input} id="icon-button-file" type="file" hidden onChange={handleChange} />
                  <label htmlFor="icon-button-file">
                    <IconButton className={classes.button} component="span">
                      <RestoreIcon />
                    </IconButton>
                  </label>


                </Grid>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{t("download log text")}</TableCell>
              <TableCell>

              </TableCell>
              <TableCell>
                  <InputLabel id="demo-simple-select-helper-label">{t("logtime length for download")}</InputLabel>
                  <SelectBox options={logtimelist} value={logtime} onChange={LogtimeChange} />
                </TableCell>
              <TableCell align="right">


                <Grid>
                  {t("download")}:
                  <IconButton onClick={downloadlog}>
                    <SaveIcon />
                  </IconButton>

                </Grid>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <Grid container direction="row" justify="space-between" alignItems="center" style={{ marginTop: 10 }}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            {t("dashboard functions")} 
          </Typography>
        </Grid>

        <Grid item></Grid>
      </Grid>
      <Divider style={{ marginBottom: 10, marginTop: 10 }} />

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{t("upload svg")} {t("max 5mb")}</TableCell>
              <TableCell>

              </TableCell>
              <TableCell align="right">


                <Grid>
                  {t("upload")}:
                  <input accept="image/svg+xml" ref={svghiddenFileInput} className={classes.input} id="icon-button-svgfile" type="file" hidden onChange={svghandleChange} />
                  <label htmlFor="icon-button-svgfile">
                    <IconButton className={classes.button} component="span">
                      <CloudUploadIcon />
                    </IconButton>
                  </label>


                </Grid>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>      

      <Grid container direction="row" justify="space-between" alignItems="center" style={{ marginTop: 10 }}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            {t("system information")}
          </Typography>
        </Grid>

        <Grid item></Grid>
      </Grid>

      <Divider style={{ marginBottom: 10, marginTop: 10 }} />

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{t("parameter")}</TableCell>
              <TableCell></TableCell>
              <TableCell align="right">{t("value")}</TableCell>
              <TableCell style={{ width: 30 }} align="left">{t("unit")}</TableCell>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell>{t("operating system")}</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">{systeminfo['system']}</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t("cpu count")}</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">{systeminfo['cpucount']}</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t("cpu load")}</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">{systeminfo['cpuload']}</TableCell>
            <TableCell align="left">%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t("cpu frequency")}</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">{systeminfo['cpufreq']}</TableCell>
            <TableCell align="left">Mhz</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t("system temp")}</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">{systeminfo['temp']}</TableCell>
            <TableCell align="left">{systeminfo['temp_unit']}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t("total memory")}</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">{systeminfo['totalmem']}</TableCell>
            <TableCell align="left">Mb</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t("available memory")}</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">{systeminfo['availmem']}</TableCell>
            <TableCell align="left">Mb</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t("used memory")}</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">{systeminfo['mempercent']}</TableCell>
            <TableCell align="left">%</TableCell>
          </TableRow>
        <TableRow>
            <TableCell>{t("eth0 ip address")}</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">{systeminfo['eth0']}{" @ "}{systeminfo['eth0speed']}</TableCell>
            <TableCell align="left">Mbit</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t("wlan0 ip Address")}</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">{systeminfo['wlan0']}{" @ "}{systeminfo['wlan0speed']}</TableCell>
            <TableCell align="left">Mbit</TableCell>
          </TableRow>
        </Table>
      </TableContainer>

    </div>
  );
};

export default CBPiSystem;

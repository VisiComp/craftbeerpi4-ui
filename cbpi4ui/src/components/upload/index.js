import { Button, Grid, Typography, Divider, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {useTranslation} from 'react-i18next';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from '@material-ui/core/InputLabel';
import { uploadapi } from "../data/uploadapi"

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


const Upload = () => {
  const classes = useStyles();
  const hiddenFileInput = React.useRef(null);
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    const FileName = fileUploaded.name;
    let formData = new FormData();
    formData.append("File", fileUploaded);
    console.log("Start upload");
    uploadapi.sendFile(formData, ReloadPage());
  };

  const ReloadPage = () => {
    console.log("Upload done -> reload page");
    /*window.location.reload();*/
  }


  const XMLSubmit = () => {
    uploadapi.sendXML(xml, path);
  };
  
  const JSONSubmit = () => {
    uploadapi.sendJSON(json, path);
  };

  const KBHSubmit = () => {
    uploadapi.sendKBH(kbh, path);
  };

  const BFSubmit = () => {
    uploadapi.sendBF(bf, path);
  };

  const [kbhlist, setKBHList] = useState([]);
  const [xmllist, setXMLList] = useState([]);
  const [jsonlist, setJSONList] = useState([]);
  const [bflist, setBFList] = useState([]);
  const [xml, setXML] = useState([]);
  const [json, setJSON] = useState([]);
  const [kbh, setKBH] = useState([]);
  const [bf, setBF] = useState([]);
  const [path, setPath] = useState([]);
  const [offset, setOffset] = useState(0);
  const offsetlist = [{ 'value': 0, 'label': '0' },
  { 'value': 50, 'label': '50' },
  { 'value': 100, 'label': '100' },
  { 'value': 150, 'label': '150' },
  { 'value': 200, 'label': '200' }];

  useEffect(() => {
    uploadapi.getpath((data) => {
      setPath(data);
    });
  }, []);

  useEffect(() => {
    uploadapi.getkbh((data) => {
      setKBHList(data);
    });
  }, []);

  useEffect(() => {
    uploadapi.getxml((data) => {
      setXMLList(data);
    });
  }, []);

  useEffect(() => {
    uploadapi.getjson((data) => {
      setJSONList(data);
    });
  }, []);

  useEffect(() => {
    uploadapi.getbf(offset, (data) => {
      setBFList(data);
    });
  }, []);

  const XMLChange = (event) => {
    setXML(event.target.value);
  };

  const JSONChange = (event) => {
    setJSON(event.target.value);
  };

  const KBHChange = (event) => {
    setKBH(event.target.value);
  };

  const BFChange = (event) => {
    setBF(event.target.value);
  };

  const OffsetChange = (event) => {
    setOffset(event.target.value);
    uploadapi.getbf(event.target.value, (data) => {
      setBFList(data)
    });
  };

  const { t, i18n } = useTranslation();

  return (
    <div>
      <Grid container direction="row" justify="space-between" alignItems="center" style={{ marginTop: 10 }}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            {t("recipe upload")}
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
      <Divider style={{ marginBottom: 10, marginTop: 10 }} />

      <Grid container spacing={2} className={classes.root}>
        <Grid item spacing={2} xs={12}>
          <Paper style={{ padding: 10 }}>
            <p>{t("upload recipe text")}</p>
          </Paper>
        </Grid>

        <Grid item spacing={2} xs={12}>
          <Paper style={{ padding: 10 }}>
            <Button variant="contained" component="label">
             {t("upload button")}
              <input ref={hiddenFileInput}
                type="file"
                onChange={handleChange}
                hidden
                accept=".xml,.sqlite,.json"
              />
            </Button>
          </Paper>
        </Grid>

        <Divider style={{ marginBottom: 10, marginTop: 10 }} />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{t("select recipe")}</TableCell>
                <TableCell>

                </TableCell>
                <TableCell align="right">{t("create")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <TableRow>
                <TableCell>
                  <InputLabel id="demo-simple-select-helper-label">{t("beerxml recipe from uploaded file")}</InputLabel>
                  <SelectBox options={xmllist} value={xml} onChange={XMLChange} />
                </TableCell>
                <TableCell>

                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" component="label" >
                    {t("create recipe from beerxml recipe")}
                    <input
                      value={xml}
                      onClick={XMLSubmit}
                      hidden
                    />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <InputLabel id="demo-simple-select-helper-label">{t("json recipe from uploaded file")}</InputLabel>
                  <SelectBox options={jsonlist} value={json} onChange={JSONChange} />
                </TableCell>
                <TableCell>

                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" component="label" >
                    {t("create recipe from json")}
                    <input
                      value={json}
                      onClick={JSONSubmit}
                      hidden
                    />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <InputLabel id="demo-simple-select-helper-label">{t("recipe from kbh database")}</InputLabel>
                  <SelectBox options={kbhlist} value={kbh} onChange={KBHChange} />
                </TableCell>
                <TableCell>

                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" component="label" >
                    {t("create recipe from kbh database")}
                    <input
                      value={kbh}
                      onClick={KBHSubmit}
                      hidden
                    />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <InputLabel id="demo-simple-select-helper-label">{t("brewfather recipes 50")}</InputLabel>
                  <SelectBox options={bflist} value={bf} onChange={BFChange} />
                </TableCell>
                <TableCell>
                  <InputLabel id="demo-simple-select-helper-label">{t("recipe offset 50")}</InputLabel>
                  <SelectBox options={offsetlist} value={offset} onChange={OffsetChange} />
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" component="label" >
                    {t("create recipe from brewfather webapp")}
                    <input
                      value={bf}
                      onClick={BFSubmit}
                      hidden
                    />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>


      </Grid>


    </div>
  );
};

export default Upload;

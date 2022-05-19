import { Breadcrumbs, Divider, Grid, IconButton, Link, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from "@material-ui/icons/Delete";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SaveIcon from "@material-ui/icons/Save";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {useTranslation} from 'react-i18next';
import { recipeapi } from "../data/recipeapi";
import Header from "../util/Header";
import { BasicData } from "./BasicData";
import { MashStepList } from "./MashStepList";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteDialog from "../util/DeleteDialog";
import { CloneRecipeDialog } from "./CloneRecipeDialog";
import { CBPiPaddleIcon } from "../util/icons/CBPiSensorIcon";

const RecipeEditor = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false)
  const history = useHistory();
  const [steps, setSteps] = useState([]);
  const [basicData, setBasicData] = useState({ name: "", author: "", desc: "" });
  
  useEffect(() => {
    if (id) {
      const success = (data) => {
        setBasicData(data.basic);
        setSteps(data.steps);
        };

      recipeapi.load(id, success);
    }
  }, [id]);

  const save = () => recipeapi.save(id, { basic: basicData, steps });
  const addStep = () => setSteps([...steps, { name: "", props: {}, type: "" }]);
  const back = () => history.push("/recipes");
  const brew = () => {
    recipeapi.brew(id)
    history.push("/mashprofile")
  }

  const remove = () => {
    recipeapi.remove(id);
    history.goBack();
  };

  const clone = () => {
    setOpen(true)
  };

  const { t, i18n } = useTranslation();

  return (
    <>
      <Header title={t("basic data")}>
        <IconButton variant="contained" onClick={back}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton variant="contained" onClick={clone}>
          <FileCopyIcon />
        </IconButton>
        <CloneRecipeDialog id={id} open={open} setOpen={setOpen}/>

        <IconButton variant="contained" onClick={brew}>
          <CBPiPaddleIcon />
        </IconButton>
        <IconButton variant="contained" onClick={save}>
          <SaveIcon />
        </IconButton>
        <DeleteDialog
            title={t("delete recipe")}
            message={t("delete recipe text")}
            callback={remove}
          />
      </Header>

      <Breadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          onClick={() => {
            history.push("/mashprofile");
          }}
        >
          {t("active recipe")}
        </Link>
        <Link
          color="inherit"
          onClick={() => {
            history.push("/recipes");
          }}
        >
          {t("recipe book")}
        </Link>
        <Typography color="textPrimary">{basicData.name}</Typography>
      </Breadcrumbs>
          <Divider/>

      <BasicData data={basicData} setData={setBasicData} />
      <Header title={t("brew steps")}>
        <IconButton variant="contained" onClick={addStep}>
          <AddIcon />
        </IconButton>
      </Header>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <MashStepList items={steps} setItems={setSteps} />
        </Grid>
      </Grid>
    </>
  );
};

export default RecipeEditor;

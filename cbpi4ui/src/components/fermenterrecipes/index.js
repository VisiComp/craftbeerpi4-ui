import { Breadcrumbs, Divider, makeStyles, Paper,InputBase, IconButton, Link, List, ListItem, ListItemSecondaryAction, ListItemText, ListItemIcon } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {useTranslation} from 'react-i18next';
import { fermenterrecipeapi } from "../data/fermenterrecipeapi";
import { NewRecipeDialog } from "./NewRecipeDialog";
import SearchIcon from "@material-ui/icons/Search";
import AssignmentIcon from '@material-ui/icons/Assignment';
import { CBPiBeerIcon } from "../util/icons/CBPiSensorIcon";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));



const FermenterRecipes = () => {
  const [totalList, setTotalList] = useState([]);
  const [list, setList] = useState([]);
  const history = useHistory();
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState("");
  const classes = useStyles();

  useEffect(() => {
    fermenterrecipeapi.get((data) => {
      setTotalList(data)
      setList(data);
    });
  }, []);

  useEffect(() => {
    console.log(filter)
    if(filter) {
      setList(totalList.filter(item=> item?.name.includes(filter) ))
    }
    else {
      setList(totalList)
    }
  }, [filter]);

  

  const openRecipe = (file) => {
    history.push("/fermenterrecipe/" + file);
  };

  const createRecipe = () => {
    setOpen(true)

  }

 

  const { t, i18n } = useTranslation();

  return (
    <>
      <Grid container direction="row" justify="space-between" alignItems="center" style={{ marginTop: 10 }}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            {t("fermenter recipes")}
          </Typography>
        </Grid>
        <Grid item>
          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              placeholder={t("filter")}
              inputProps={{ "aria-label": "filter settings" }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item>
          <IconButton variant="contained" onClick={createRecipe}>
            <AddIcon />
          </IconButton>
          <NewRecipeDialog open={open} setOpen={setOpen}/>
        </Grid>
      </Grid>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          onClick={() => {
            history.push("/fermenterprofile");
          }}
        >
          {t("active recipe")}
        </Link>
        <Typography color="textPrimary">{t("recipes")}</Typography>
      </Breadcrumbs>
      <Divider style={{ marginBottom: 10, marginTop: 10 }} />
      <List>
        {list.map((item) => (
          <ListItem button onClick={() => openRecipe(item.file)}>
            <ListItemIcon>
              <CBPiBeerIcon/>
            </ListItemIcon>
            <ListItemText primary={item.name || "No Name"} secondary={item.desc} />
            <ListItemSecondaryAction>x</ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default FermenterRecipes;

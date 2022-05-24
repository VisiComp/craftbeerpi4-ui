import { Divider, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import logo from "../../images/cbpi.png";
import { useCBPi } from "../data";
import paypal_logo from './paypal.png';
import Button from "@material-ui/core/Button";
import {useTranslation} from 'react-i18next';
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

const About = () => {
  const classes = useStyles();
  const {state} = useCBPi();
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <Grid container direction="row" justify="space-between" alignItems="center" style={{ marginTop: 10 }}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
           {t('about')} 
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
      <Divider style={{ marginBottom: 10, marginTop: 10 }} />

      <Grid container spacing={2} className={classes.root}>
        <Grid item spacing={2} xs={12}>
          <Paper style={{ padding: 10 }}>
            {t('this is cbpi')} {state.version} | {t('codename')} {state.codename})
            <p>{t("description about")}</p>
            Website: http://www.CraftBeerPi.com <br />
            GitHub: http://github.com/manuel83 <br />
            Facebook: http://github.com/groups/craftbeerpi<br />
            <br />
            {t('github fork')} <br />
            {t('openbrewing documentation')} <Button color="primary" target="_blank" href="https://openbrewing.gitbook.io/craftbeerpi4_support/" rel="noreferrer noopener">{t('link to documentation')}</Button>
            <br />
            <p>{t('cheers')}</p>
            <p> Manuel Fritsch / Alexander Vollkopf</p>
            <img width={30} src={logo} alt="Logo" /> CraftBeerPi
          </Paper>
        </Grid>
        <Grid item spacing={2} xs={12}>
          <Paper style={{ padding: 10 }}>
            <h3>{t('license')}</h3>
            <p>GNU General Public License 3</p>
          </Paper>
        </Grid>
        <Grid item spacing={2} xs={12}>
          <Paper style={{ padding: 10 }}>
            <h3>{t('paypal donation')}</h3>
            <p>{t('donation text')}</p>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="QA2DR6FKNF6VN" />
        <input
          type="image"
          src="/paypal.png"
          border="0"
          width="200px"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img alt="" border="0" src={paypal_logo} width="1" height="1" />
      </form>
          </Paper>
        </Grid>
        
      </Grid>

      
    </div>
  );
};

export default About;

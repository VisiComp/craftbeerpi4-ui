import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core"
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {useTranslation} from 'react-i18next';
import { recipeapi } from "../data/recipeapi";


export const NewRecipeDialog = ({open, setOpen}) => {

    const history = useHistory()
    const [name, setName] = useState("")

    const create = () => {
        recipeapi.create(name, (id)=> {
            history.push("/recipe/" + id);
          })
    }

    const cancel = () => {
        setOpen(false)
    }

    const { t, i18n } = useTranslation();
    
    return <Dialog open={open} onClose={cancel} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
    <DialogTitle id="alert-dialog-title">{t('new recipe')}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
            <TextField label={t("name")} value={name} onChange={(e)=>setName(e.target.value)} />
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={cancel} color="secondary" autoFocus variant="contained">
        {t('cancel')}
      </Button>
      <Button onClick={create} color="primary" variant="contained">
        {t('create')}
      </Button>
    </DialogActions>
  </Dialog>


}
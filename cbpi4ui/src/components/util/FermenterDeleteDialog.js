import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import {useTranslation} from 'react-i18next';


const FermenterDeleteDialog = ({ btnText, title, message, callback, fermenterid, id }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const no = () => {
    setOpen(false);
  };

  const yes = () => {
    setOpen(false);
    callback(fermenterid, id);
  };

  const { t, i18n } = useTranslation();

  return (
    <>
      {btnText ? (
        <Button color="secondary" onClick={handleClickOpen} variant="contained" size="small" startIcon={<DeleteIcon />}>
          {btnText}
        </Button>
      ) : (
        <IconButton aria-label="delete"  onClick={handleClickOpen}>
          <DeleteIcon />
        </IconButton>
      )}

      <Dialog open={open} onClose={no} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={no} color="secondary" autoFocus variant="contained">
            {t("no")}
          </Button>
          <Button onClick={yes} color="primary" variant="contained">
            {t("yes")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FermenterDeleteDialog;

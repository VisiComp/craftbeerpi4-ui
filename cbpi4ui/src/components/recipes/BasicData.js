import { TextField } from "@material-ui/core";
import { default as React, useState } from "react";
import {useTranslation} from 'react-i18next';


export const BasicData = ({data, setData}) => {


  const handleChange = (event) => {
    const values = {...data};
    values[event.target.name] = event.target.value;
    setData({...values});
  }

  const { t, i18n } = useTranslation();
  
  return (
    <>
      <TextField fullWidth name="name" value={data.name} onChange={handleChange}  id="name" label={t("name")} />
      <TextField fullWidth name="author" value={data.author} onChange={handleChange}  id="author" label={t("author")} />
      <TextField  name="desc" fullWidth multiline value={data.desc} onChange={handleChange} id="desc" label={t("description")} />
    </>
  );
};

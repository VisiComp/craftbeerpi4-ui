import { FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { useEffect } from "react";
import ActorSelect from "./ActorSelect";
import KettleSelect from "./KettleSelect";
import FermenterSelect from "./FermenterSelect";
import SensorSelect from "./SensorSelect";
import {useTranslation} from 'react-i18next';

const SelectInput = ({ label, description="", options=[], value, onChange }) => {
  const { t, i18n } = useTranslation();
    return (
      <>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          {label}
        </InputLabel>
        <Select fullWidth labelId="demo-simple-select-label" id="demo-simple-select" value={value} onChange={onChange}>
        <MenuItem key="actor-non" value="">---</MenuItem>
          {options.map((item) => (
            <MenuItem key={item} value={item}>
              {t("propsedit_"+item)}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{description}</FormHelperText>
      </>
    );
  };


const PropsEdit = ({ config, onChange = () => {}, data={}}) => {
  const { t, i18n } = useTranslation();
  useEffect(() => {}, [config, data]);
  //console.log(config)
  if (!config) {
    return <></>;
  }
 
  const render_input = (item) => {
   
    switch (item.type) {
      case "select":
        //console.log(1,item.description)
        return <SelectInput description={t("propsedit_")+item.description} label={t("propsedit_"+item.label)} options={item.options} value={data[item.label]} onChange={(e) => onChange(item.label, e.target.value)} />;
      case "kettle":
        return <KettleSelect description={item.description} value={data[item.label]} onChange={(e) => onChange(item.label, e.target.value)} />;
      case "fermenter":
        return <FermenterSelect description={item.description} value={data[item.label]} onChange={(e) => onChange(item.label, e.target.value)} />;
      case "sensor":
        return <SensorSelect description={t("propsedit_"+item.description)} value={data[item.label]} onChange={(e) => onChange(item.label, e.target.value)} />;
      case "actor":
        return <ActorSelect description={t("propsedit_"+item.description)} value={data[item.label]} onChange={(e) => onChange(item.label, e.target.value)} />;
      case "number":
        return <TextField helperText={t("propsedit_"+item.description)}  value={data[item.label]} onChange={(e) => onChange(item.label, e.target.value)} type="number" label={t("propsedit_"+item.label)} fullWidth helperText={t("propsedit_"+item.description)}/>;
      default:
        return <TextField helperText={t("propsedit_"+item.description)} value={data[item.label]} onChange={(e) => onChange(item.label, e.target.value)} label={t("propsedit_"+item.label)} fullWidth helperText={t("propsedit_"+item.description)}/>;
    }
  };

  return (
    <>
      {config.map((item) => (
        <Grid item  lg={2} sm={4} xs={12} md={6} key={item.label}>
          {render_input(item)}
        </Grid>
      ))}
    </>
  );
};

export default PropsEdit;

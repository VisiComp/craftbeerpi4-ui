import {FormHelperText, InputLabel } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useContext } from "react";
import { CBPiContext } from "../data";
import {useTranslation} from 'react-i18next';


const FermenterSelect = ({ label = "Fermenter", description="", value, onChange, fullWidth=false}) => {
  const { t, i18n } = useTranslation();
  const { state } = useContext(CBPiContext);

  return (
    <>
      {label ? (<InputLabel shrink id="demo-simple-select-placeholder-label-label">
        {t("FermenterSelect_"+label)}
      </InputLabel>): ""}
      
      <Select fullWidth={fullWidth} labelId="demo-simple-select-label" id="demo-simple-select" value={value} onChange={onChange}>
      <MenuItem key="actor-non" value="">---</MenuItem>
        {state.fermenter.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{description}</FormHelperText>
    </>
  );
};

export default FermenterSelect;

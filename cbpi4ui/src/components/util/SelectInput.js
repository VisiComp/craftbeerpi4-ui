import { FormHelperText, InputLabel, MenuItem, Select } from "@material-ui/core";
import {useTranslation} from 'react-i18next';

export const SelectInput = ({ label, description="", options=[], value, onChange }) => {
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
              {t("dashboard_properties_"+item)}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{description}111</FormHelperText>
      </>
    );
  };

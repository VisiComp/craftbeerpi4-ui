
import { InputLabel} from "@material-ui/core"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { useContext } from "react";
import {useTranslation} from 'react-i18next';
import { CBPiContext } from "../data";

 const StepTypeSelect = ({label="Logic", value, onChange, }) => {
    const { state } = useContext(CBPiContext);
    const { t, i18n } = useTranslation();

    return <>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            {t('StepTypeSelect_' + label)}
     </InputLabel>
        <Select fullWidth
            name="type"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            onChange={onChange}>
                <MenuItem  key="none" value="">---</MenuItem>
            {state.stepTypes.map((item) => <MenuItem  key={item.name} value={item.name}>{t("StepTypeSelect_"+item.name)}</MenuItem>)}
        </Select>
    </>
}


export default StepTypeSelect
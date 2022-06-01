
import { InputLabel} from "@material-ui/core"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { useContext } from "react";
import {useTranslation} from 'react-i18next';
import { CBPiContext } from "../data";

 const FermenterStepTypeSelect = ({label="Logic", value, onChange, }) => {
    const { t, i18n } = useTranslation();
    const { state } = useContext(CBPiContext);

    return <>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            {t("FermenterStepTypeSelect_"+label)}
     </InputLabel>
        <Select fullWidth
            name="type"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            onChange={onChange}>
                <MenuItem  key="none" value="">---</MenuItem>
            {state.stepTypesFermenter.map((item) => <MenuItem  key={item.name} value={item.name}>{t("FermenterStepTypeSelect_"+item.name)}</MenuItem>)}
        </Select>
    </>
}


export default FermenterStepTypeSelect
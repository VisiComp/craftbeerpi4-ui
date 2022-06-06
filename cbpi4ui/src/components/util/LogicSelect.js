
import { InputLabel } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useCBPi } from "../data";
import {useTranslation} from 'react-i18next';



 const LogicSelect = ({label="Logic", value, onChange, }) => {
    const { t, i18n } = useTranslation();
    const { state } = useCBPi()
    return <>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            {t("hardware_kettle_LogicSelect_"+label)} {t("hardware_kettle_LogicSelect_"+value)}
     </InputLabel>
        <Select fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            onChange={onChange}>
                <MenuItem  key="none" value="">---</MenuItem>
            {state.logic.map((item) => <MenuItem  key={item.name} value={item.name}>{t("hardware_kettle_LogicSelect_"+item.name)}</MenuItem>)}
        </Select>
    </>
}


export default LogicSelect
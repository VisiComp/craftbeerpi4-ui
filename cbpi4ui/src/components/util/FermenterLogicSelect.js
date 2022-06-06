
import { InputLabel } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useCBPi } from "../data";
import {useTranslation} from 'react-i18next';


 const FermenterLogicSelect = ({label="FermenterLogic", value, onChange, }) => {
    const { t, i18n } = useTranslation();
    const { state } = useCBPi()
    return <>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            {t("hardware_Fermenter_Logic_Select_"+label)} {t("hardware_Fermenter_Logic_Select_"+value)}
     </InputLabel>
        <Select fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            onChange={onChange}>
                <MenuItem  key="none" value="">---</MenuItem>
            {state.fermenterlogic.map((item) => <MenuItem  key={item.name} value={item.name}>{t("hardware_Fermenter_Logic_Select_"+item.name)}</MenuItem>)}
        </Select>
    </>
}


export default FermenterLogicSelect
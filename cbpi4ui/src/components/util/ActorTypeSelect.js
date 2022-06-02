
import { InputLabel } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { CBPiContext, useCBPi } from "../data";
import {useTranslation} from 'react-i18next';


 const ActorTypeSelect = ({label="Logic", value, onChange, }) => {
    const { t, i18n } = useTranslation();
    const { state } = useCBPi(CBPiContext);
    return <>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            {label}
     </InputLabel>
        <Select fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            onChange={onChange}>
                <MenuItem  key="none" value="">---</MenuItem>
            {state.actorTypes.map((item) => <MenuItem  key={item.name} value={item.name}>{t("hardware_ActorTypeSelect_"+item.name)}</MenuItem>)}
        </Select>
    </>
}


export default ActorTypeSelect
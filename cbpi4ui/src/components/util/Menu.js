import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BallotIcon from '@material-ui/icons/Ballot';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import InfoIcon from '@material-ui/icons/Info';
import PowerIcon from '@material-ui/icons/Power';
import SettingsIcon from '@material-ui/icons/Settings';
import TimelineIcon from '@material-ui/icons/Timeline';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ComputerIcon from '@material-ui/icons/Computer';
import React from 'react';
import {

    useHistory
} from "react-router-dom";
import {useTranslation} from 'react-i18next';



const MenuItem = ({ onClose, label, path = "/", children }) => {
    const history = useHistory();

    const goTo = (key) => {
        history.push(key);
        onClose()
    }

    
    return <><ListItem button onClick={()=>goTo(path)}>
        <ListItemIcon>
            {children}
        </ListItemIcon>
        <ListItemText primary={label} />
     
    </ListItem>
    
    </>
}



const Menu = ({onClose}) => {
    const { t, i18n } = useTranslation();
    return <List>
        <MenuItem onClose={onClose} label={t("dashboard")} ><DashboardIcon /></MenuItem>
        <MenuItem onClose={onClose} label={t("mash profile")} path="/mashprofile"><BallotIcon /></MenuItem>
        <MenuItem onClose={onClose} label={t("fermenter profile")} path="/fermenterprofile"><BallotIcon /></MenuItem>
        <MenuItem onClose={onClose} label={t("hardware")} path="/hardware"><DeveloperBoardIcon /></MenuItem>
        <MenuItem onClose={onClose} label={t("settings")} path="/settings"><SettingsIcon /></MenuItem>
        <MenuItem onClose={onClose} label={t("analytics")} path="/charting"><TimelineIcon /></MenuItem>
        <MenuItem onClose={onClose} label={t("plugins")} path="/plugins"><PowerIcon /></MenuItem>
        <MenuItem onClose={onClose} label={t("recipe upload")} path="/upload"><CloudUploadIcon /></MenuItem>
        <MenuItem onClose={onClose} label={t("system")} path="/system"><ComputerIcon /></MenuItem>
        <MenuItem onClose={onClose} label={t("about")} path="/about"><InfoIcon /></MenuItem>
    </List>
}

export default Menu


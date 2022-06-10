import { useContext } from "react";
import { CBPiContext } from "../data";
import {useTranslation} from 'react-i18next';


 const ActorName = ({id}) => {
    const { t, i18n } = useTranslation();
    const { state } = useContext(CBPiContext);

    const item = state.actors.find(e => e.id === id)
    return item ? (<>{item.name}</>) : (<>{t("actor_name_actor_not_found")}</>)
}

export default ActorName
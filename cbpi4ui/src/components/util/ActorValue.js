import { useContext } from "react";
import { CBPiContext } from "../data";
import {useTranslation} from 'react-i18next';



 const ActorValue = ({label = "Actor", id, property="name"}) => {
    const { t, i18n } = useTranslation();

    const { state } = useContext(CBPiContext);

    const actor = state.actors.find(e => e.id === id)
    return actor ? (<>{actor.name}</>) : (<>{t("hardware_actor not found")}</>)
}

export default ActorValue
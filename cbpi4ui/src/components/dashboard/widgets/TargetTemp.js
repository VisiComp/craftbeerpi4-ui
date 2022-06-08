
import React from "react";
import { useKettle } from "../../data";
import { useModel } from "../DashboardContext";
import {useTranslation} from 'react-i18next';


export const TargetTemp = ({ id }) => {
    
    const model = useModel(id)
    const kettle = useKettle(model.props?.kettle)
    const css_style = { color: model?.props?.color || "#fff", fontSize: `${model?.props?.size}px` };
    const { t, i18n } = useTranslation();


    if(!kettle) {
      return t("dashboard_missing_config")
    }


    return <div style={css_style}> {kettle?.target_temp} {model?.props?.unit }</div>;
  };
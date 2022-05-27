
import React from "react";
import {useTranslation} from 'react-i18next';
import { useModel } from "../DashboardContext";

 const CustomSVG = ({ id }) => {
    const model = useModel(id);
    const name = model?.props.name

    const { t, i18n } = useTranslation();
    
    if(name) {
      return <img src={`/dashboard/static/${name}.svg`}  width={model?.props?.width || 100} height="auto" className="no-drag"  alt="SVG NOT FOUND"/>
    }
    else{
      return <div>{t("svg_missing_config")}</div>
    }

  };
  
  export default CustomSVG


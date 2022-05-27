import { Chip } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import CachedIcon from "@material-ui/icons/Cached";
import ErrorIcon from "@material-ui/icons/Error";
import {useTranslation} from 'react-i18next';


const StepStateChip = ({ state }) => {
  const { t, i18n } = useTranslation();
  switch (state) {
    case "I":
      return <Chip label={t("state_inactive")} />;
    case "A":
      return <Chip label={t("state_active")} icon={<CachedIcon />} color="primary" />;
    case "E":
      return <Chip label={t("state_error")} icon={<ErrorIcon />} />;
    case "D":
      return <Chip label={t("state_done")} icon={<CheckCircleIcon />} />;
    case "S":
      return <Chip label={t("state_pause")} icon={<PauseCircleOutlineIcon />} />;
    default:
      return <Chip label={state} />;
  }
};

export default StepStateChip;

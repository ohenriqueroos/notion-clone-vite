import { IconButton } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ToggleMenu = ({
  openMenu,
  toggleMenu,
}: {
  openMenu: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <IconButton
      size="small"
      sx={(theme) => ({
        boxShadow: 4,
        backgroundColor: theme.palette.background.default,
        "&:hover": {
          backgroundColor: theme.palette.background.paper,
        },
      })}
      onClick={toggleMenu}
    >
      {openMenu && <ArrowBackIosNewIcon fontSize="small" />}
      {!openMenu && <ArrowForwardIosIcon fontSize="small" />}
    </IconButton>
  );
};

export default ToggleMenu;

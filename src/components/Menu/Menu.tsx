import { Box, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface IMenuProps {
  onChangeTheme: () => void;
  theme: boolean;
}

const Menu = ({ onChangeTheme, theme }: IMenuProps) => {
  return (
    <Box
      position={"fixed"}
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        borderRadius: 1,
        marginLeft: 1,
        marginTop: 10,
      })}
    >
      <IconButton onClick={onChangeTheme}>
        {theme && <LightModeIcon sx={{ color: "#F2CB05" }} />}
        {!theme && <DarkModeIcon />}
      </IconButton>
    </Box>
  );
};

export default Menu;

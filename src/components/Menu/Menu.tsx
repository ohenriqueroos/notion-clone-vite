import { Box, Button, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface IMenuProps {
  onChangeTheme: () => void;
  theme: boolean;
}

const Menu = ({ onChangeTheme, theme }: IMenuProps) => {
  return (
    <Box position={"fixed"}>
      <Button variant="contained" onClick={onChangeTheme}>
        Tema
      </Button>
      <IconButton onClick={onChangeTheme}>
        {theme && <LightModeIcon />}
        {!theme && <DarkModeIcon />}
      </IconButton>
    </Box>
  );
};

export default Menu;

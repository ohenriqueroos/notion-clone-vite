import { Box, Divider, IconButton, Stack, useTheme } from "@mui/material";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { NavLink } from "react-router-dom";

interface IMenuProps {
  onChangeTheme: () => void;
  theme: boolean;
}

const Menu = ({ onChangeTheme, theme }: IMenuProps) => {
  const themeMui = useTheme();

  return (
    <Box
      position={"fixed"}
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        borderRadius: 1,
        marginLeft: 1,
        marginTop: 10,
        boxShadow: 4,
        p: 0.5,
      })}
    >
      <Stack spacing={1}>
        <IconButton onClick={onChangeTheme}>
          {theme && <LightModeIcon sx={{ color: "#F2CB05" }} />}
          {!theme && (
            <DarkModeIcon sx={{ color: themeMui.palette.text.disabled }} />
          )}
        </IconButton>
        <Divider />
        <NavLink
          to={"workspace"}
          style={({ isActive }) => {
            return {
              paddingTop: 10,
              height: 40,
              color: isActive
                ? theme
                  ? themeMui.palette.primary.dark
                  : themeMui.palette.primary.light
                : themeMui.palette.text.disabled,
            };
          }}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <NoteAltIcon />
          </Box>
        </NavLink>
      </Stack>
    </Box>
  );
};

export default Menu;

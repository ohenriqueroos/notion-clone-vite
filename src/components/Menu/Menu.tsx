import { Box, Divider, IconButton, Stack, useTheme } from "@mui/material";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface IMenuProps {
  onChangeTheme: () => void;
  theme: boolean;
}

const Menu = ({ onChangeTheme, theme }: IMenuProps) => {
  const themeMui = useTheme();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        boxShadow: 4,
        p: 0.5,
        zIndex: 1,
        width: !openMenu ? 50 : 100,
      })}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Stack
        display={"flex"}
        alignItems={!openMenu ? "center" : "start"}
        flexDirection={"column"}
        pl={!openMenu ? 0 : 1}
      >
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={!openMenu ? "center" : "end"}
        >
          <IconButton
            onClick={() => setOpenMenu((prevState) => (prevState = !prevState))}
            size="small"
          >
            {openMenu && (
              <ArrowBackIosNewIcon
                sx={{ color: themeMui.palette.text.disabled }}
              />
            )}
            {!openMenu && (
              <ArrowForwardIosIcon
                sx={{ color: themeMui.palette.text.disabled }}
              />
            )}
          </IconButton>
        </Box>
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
      <Box>
        <Divider />
        <IconButton onClick={onChangeTheme}>
          {theme && <LightModeIcon sx={{ color: "#F2CB05" }} />}
          {!theme && (
            <DarkModeIcon sx={{ color: themeMui.palette.text.disabled }} />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Menu;

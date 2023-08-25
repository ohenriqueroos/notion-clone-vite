import { Box, Stack, Switch, Typography } from "@mui/material";

import { useState } from "react";

import Logo from "../Logo/Logo";
import ToggleMenu from "./ToggleMenu/ToggleMenu";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface IMenuProps {
  onChangeTheme: (value: boolean) => void;
  theme: boolean;
}

const Menu = ({ onChangeTheme, theme }: IMenuProps) => {
  const [openMenu, setOpenMenu] = useState(true);

  const onToggleMenuHandler = () => {
    setOpenMenu((prevState) => (prevState = !prevState));
  };

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        boxShadow: 4,
        p: 2,
        zIndex: 1,
        width: !openMenu ? 75 : 250,
        borderRadius: "0 1rem 1rem 0",
        position: "relative",
      })}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Box sx={{ position: "absolute", right: openMenu ? -12 : -40, top: 22 }}>
        <ToggleMenu openMenu={openMenu} toggleMenu={onToggleMenuHandler} />
      </Box>
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <Logo width={40} height={40} iconSize={"medium"} />
        {openMenu && <Typography variant="h6">Notions</Typography>}
      </Stack>
      <Stack direction={openMenu ? "row" : "column"} alignItems={"center"}>
        <Switch checked={theme} onChange={(e, v) => onChangeTheme(v)} />
        {theme && <DarkModeIcon color="primary" />}
        {!theme && <LightModeIcon sx={{ color: "#f0d000" }} />}
      </Stack>
    </Box>
  );
};

export default Menu;

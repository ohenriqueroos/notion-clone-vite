import {
  Box,
  Stack,
  Typography,
  // useTheme,
} from "@mui/material";

import { useState } from "react";

import Logo from "../Logo/Logo";
import ToggleMenu from "./ToggleMenu/ToggleMenu";

// interface IMenuProps {
//   onChangeTheme: () => void;
//   theme: boolean;
// }

const Menu = () => {
  // const themeMui = useTheme();
  const [openMenu, setOpenMenu] = useState(true);

  const onToggleMenuHandler = () => {
    setOpenMenu((prevState) => (prevState = !prevState));
  };

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
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
    </Box>
  );
};

export default Menu;

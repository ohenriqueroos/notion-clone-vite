import { Avatar, Box, IconButton, Stack, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AvatarDropdown from "./AvatarDropdown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import { useState } from "react";

const Header = () => {
  const themeMui = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onCloseHandler = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prevState) => (prevState = !prevState));
  };

  return (
    <Box
      sx={(theme) => ({
        top: 10,
        right: 10,
        px: 2,
        width: "fit-content",
        height: "3rem",
        boxShadow: 4,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        zIndex: 1,
        position: "absolute",
      })}
      display={"flex"}
      alignItems={"center"}
      gap={4}
    >
      <Stack direction={"row"} gap={2}>
        <IconButton size="small">
          <MessageIcon fontSize="small" color="primary" />
        </IconButton>
        <IconButton size="small">
          <NotificationsIcon fontSize="small" color="primary" />
        </IconButton>
      </Stack>
      <Stack direction={"row"}>
        <Avatar
          sx={{
            bgcolor: themeMui.palette.primary.light,
            width: 35,
            height: 35,
          }}
        >
          H
        </Avatar>
        <div>
          <IconButton size="small" onClick={onClickHandler}>
            <KeyboardArrowDownIcon color="primary" />
          </IconButton>
          <AvatarDropdown
            anchorEl={anchorEl}
            open={open}
            onClose={onCloseHandler}
          />
        </div>
      </Stack>
    </Box>
  );
};

export default Header;

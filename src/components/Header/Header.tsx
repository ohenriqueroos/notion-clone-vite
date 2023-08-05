import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AvatarDropdown from "./AvatarDropdown";
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
        backgroundColor: theme.palette.background.default,
        boxShadow: 4,
        width: "100%",
        height: "3rem",
        px: 4,
        zIndex: 1,
      })}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box>
        <Typography variant="h6">Notion Clone</Typography>
      </Box>
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
            <KeyboardArrowDownIcon />
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

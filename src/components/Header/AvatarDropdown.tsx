import { Menu, MenuItem } from "@mui/material";

interface IAvatarDropdownProps {
  open: boolean;
  onClose: () => void;
  anchorEl: null | HTMLElement;
}

const AvatarDropdown = ({ open, onClose, anchorEl }: IAvatarDropdownProps) => {
  return (
    <Menu
      id="basic-menu"
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={() => {}}>Profile</MenuItem>
      <MenuItem onClick={() => {}}>My account</MenuItem>
      <MenuItem onClick={() => {}}>Logout</MenuItem>
    </Menu>
  );
};

export default AvatarDropdown;

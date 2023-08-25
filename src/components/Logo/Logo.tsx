import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Logo = ({
  width,
  height,
  iconSize,
}: {
  width: number;
  height: number;
  iconSize: "small" | "inherit" | "medium" | "large";
}) => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light),
        width: width,
        height: height,
        borderRadius: 2,
      })}
    >
      <EditIcon fontSize={iconSize} />
    </Box>
  );
};

export default Logo;

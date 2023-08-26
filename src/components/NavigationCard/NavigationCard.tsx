import { Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";

const NavigationCard = ({ id, title }: { id: string; title: string }) => {
  return (
    <Link to={id}>
      <Paper
        elevation={2}
        sx={{
          width: 250,
          paddingBlock: 1,
          paddingLeft: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: 1,
        }}
      >
        <DescriptionRoundedIcon fontSize="large" />
        <Typography variant="subtitle1">{title}</Typography>
      </Paper>
    </Link>
  );
};

export default NavigationCard;

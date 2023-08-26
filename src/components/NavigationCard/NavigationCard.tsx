import { Paper, Tooltip, Typography, Zoom } from "@mui/material";
import { Link } from "react-router-dom";

import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";

const NavigationCard = ({ id, title }: { id: string; title: string }) => {
  return (
    <Link to={`document/${id}`} style={{ textDecoration: "none" }}>
      <Tooltip title={title} TransitionComponent={Zoom}>
        <Paper
          elevation={2}
          sx={{
            width: 235,
            paddingBlock: 1,
            paddingInline: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: 1,
          }}
        >
          <DescriptionRoundedIcon fontSize="large" />
          <Typography
            variant="subtitle1"
            maxWidth={"100%"}
            textOverflow={"ellipsis"}
            overflow={"hidden"}
            whiteSpace={"nowrap"}
          >
            {title}
          </Typography>
        </Paper>
      </Tooltip>
    </Link>
  );
};

export default NavigationCard;

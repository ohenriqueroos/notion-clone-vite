import { Box, Typography } from "@mui/material";

const SaveStatus = () => {
  return (
    <Box position={"fixed"} top={25} right={240}>
      <Typography variant="subtitle2" textAlign={"end"}>
        Salvo agora mesmo
      </Typography>
    </Box>
  );
};

export default SaveStatus;

import { Box, Stack, Typography } from "@mui/material";

const WorkspacePage = () => {
  return (
    <Box width={"100%"}>
      <Box
        width={"100%"}
        height={"15rem"}
        sx={{
          backgroundColor: "#ccc",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={"/assets/workspace.jpg"}
          style={{
            bottom: -250,
            position: "absolute",
            margin: "auto",
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
      <Box ml={10}>
        <Stack mt={1}>
          <Typography variant="h4">My Workspace</Typography>
          <Typography variant="subtitle1">
            This is the place where all the pages will be located
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default WorkspacePage;

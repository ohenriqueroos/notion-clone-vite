import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import NavigationCard from "../components/NavigationCard/NavigationCard";

const HomePage = () => {
  const [dayTime, setDayTime] = useState("");

  const onSetDayTime = () => {
    const actualTime = new Date().getHours();
    const nitghtTime = actualTime >= 18 && actualTime < 24;
    const morningTime = actualTime >= 1 && actualTime < 12;
    const afternoonTime = actualTime >= 13 && actualTime < 18;

    if (nitghtTime) setDayTime("Boa noite");
    if (morningTime) setDayTime("Bom dia");
    if (afternoonTime) setDayTime("Boa tarde");
  };

  useEffect(() => {
    onSetDayTime();
  }, [onSetDayTime]);

  return (
    <>
      <Typography variant="h6" mt={2} ml={5}>
        {dayTime}, Fulano da Silva
      </Typography>
      <Box width={"100%"} height={"100%"} mt={5}>
        <Typography variant="h5">Projetos</Typography>
        <Stack direction={"row"} flexWrap={"wrap"} mt={2} gap={1}>
          <NavigationCard id="" title="Documento 1" />
          <NavigationCard id="" title="Documento 2" />
          <NavigationCard id="" title="Documento 3" />
          <NavigationCard id="" title="Documento 4" />
          <NavigationCard id="" title="Documento 5" />
          <NavigationCard id="" title="Documento 6 nome maior" />
        </Stack>
      </Box>
    </>
  );
};

export default HomePage;

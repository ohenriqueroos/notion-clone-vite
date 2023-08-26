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
      <Box width={"100%"} mt={5}>
        <Typography variant="h5">Projetos</Typography>
        <Stack direction={"row"} flexWrap={"wrap"} mt={2} gap={1}>
          <NavigationCard id="1" title="Documento 1" />
          <NavigationCard id="2" title="Documento 2" />
          <NavigationCard id="3" title="Documento 3" />
          <NavigationCard id="4" title="Documento 4" />
          <NavigationCard id="5" title="Documento 5" />
          <NavigationCard id="6" title="Documento 6 nome maior" />
        </Stack>
      </Box>
    </>
  );
};

export default HomePage;

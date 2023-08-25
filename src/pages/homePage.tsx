import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

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
    <Typography variant="h6" mt={2} ml={5}>
      {dayTime}, Fulano
    </Typography>
  );
};

export default HomePage;

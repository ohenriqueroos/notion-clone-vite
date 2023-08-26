import { Button, Stack, Typography } from "@mui/material";

interface IFloatingButtonProps {
  title: string;
  description: string;
  onClick: () => void;
  image: string;
  alt: string;
}

const FloatingButton = ({
  title,
  description,
  onClick,
  image,
  alt,
}: IFloatingButtonProps) => {
  return (
    <Button variant="outlined" fullWidth onClick={onClick}>
      <Stack
        width={"100%"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"start"}
        gap={1}
      >
        <img src={image} alt={alt} style={{ width: 40 }} />
        <Stack alignItems={"start"} justifyContent={"start"}>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="subtitle2" textAlign={"start"}>
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Button>
  );
};

export default FloatingButton;

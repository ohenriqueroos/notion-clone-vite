import { Box, Button, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "../Theme";
import HomePage from "./homePage";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../store/slices/theme";

const RootPage = () => {
  const theme = useSelector((state: RootState) => state.theme.themeMode);
  const dispatch = useDispatch();

  const onChangeThemeHandler = () => {
    dispatch(changeTheme());
  };

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
          height: "100vh",
        })}
      >
        <Button variant="contained" onClick={onChangeThemeHandler}>
          Mudar tema
        </Button>
        <HomePage />
      </Box>
    </ThemeProvider>
  );
};

export default RootPage;

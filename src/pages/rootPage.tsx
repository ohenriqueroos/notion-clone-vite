import { Box, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "../Theme";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { removeDarkTheme, setDarkTheme } from "../store/slices/theme";
import { useCallback, useEffect } from "react";
import Menu from "../components/Menu/Menu";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  const theme = useSelector((state: RootState) => state.theme.themeMode);
  const dispatch = useDispatch();
  let getTheme = localStorage.getItem("dark-theme");

  const onChangeThemeHandler = useCallback(() => {
    if (getTheme) {
      dispatch(removeDarkTheme());
      localStorage.removeItem("dark-theme");
    }
    if (!getTheme) {
      dispatch(setDarkTheme());
      localStorage.setItem("dark-theme", "active");
    }
  }, [dispatch, getTheme]);

  useEffect(() => {
    if (getTheme) {
      dispatch(setDarkTheme());
    }
  }, [dispatch, getTheme]);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
          height: "100vh",
        })}
      >
        <Menu onChangeTheme={onChangeThemeHandler} theme={theme} />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default RootPage;

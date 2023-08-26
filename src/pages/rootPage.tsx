import { Box, ThemeProvider } from "@mui/material";
import { dark, light } from "../Theme";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { removeDarkTheme, setDarkTheme } from "../store/slices/theme";
import { useCallback, useEffect } from "react";
import Menu from "../components/Menu/Menu";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const RootPage = () => {
  const theme = useSelector((state: RootState) => state.theme.themeMode);
  const dispatch = useDispatch();
  let getTheme = localStorage.getItem("dark-theme");

  const onChangeThemeHandler = useCallback(
    (value: boolean) => {
      if (getTheme && !value) {
        dispatch(removeDarkTheme());
        localStorage.removeItem("dark-theme");
      }
      if (!getTheme && value) {
        dispatch(setDarkTheme());
        localStorage.setItem("dark-theme", "active");
      }
    },
    [dispatch, getTheme]
  );

  useEffect(() => {
    if (getTheme) {
      dispatch(setDarkTheme());
    }
  }, [dispatch, getTheme]);

  return (
    <ThemeProvider theme={theme ? dark : light}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
          height: "100vh",
          display: "flex",
        })}
      >
        <Menu onChangeTheme={onChangeThemeHandler} theme={theme} />
        <main style={{ width: "100%", marginLeft: 40, position: "relative" }}>
          <Header />
          <Outlet />
        </main>
      </Box>
    </ThemeProvider>
  );
};

export default RootPage;

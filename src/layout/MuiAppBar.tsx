import React, { ReactElement } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Slide,
  IconButton,
} from "@mui/material";

import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import PortfolioNavigationDrawer from "./PortfolioNavDrawer";

interface AppBarProps {
  children: React.ReactElement;
  toggleDarkMode: () => void;
  navigationDrawerOpen: boolean;
  setNavigationDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function HideOnScroll(appBarProps: AppBarProps) {
  const { children } = appBarProps;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function MuiAppBar(appBarProps: AppBarProps): ReactElement {
  const { toggleDarkMode, navigationDrawerOpen, setNavigationDrawerOpen } =
    appBarProps;

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...appBarProps}>
        <AppBar>
          <Toolbar>
            <DeveloperModeIcon />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              data-testid="appName"
            >
              SejoTech
            </Typography>
            <IconButton
              onClick={() => {
                setNavigationDrawerOpen(true);
              }}
            >
              <MenuOpenIcon />
            </IconButton>
            {/*<IconButton onClick={() =>{ toggleDarkMode();}}>
                 <Brightness6Icon/>
              </IconButton> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <PortfolioNavigationDrawer
        setNavigationDrawerOpen={setNavigationDrawerOpen}
        navigationDrawerOpen={navigationDrawerOpen}
      />
    </React.Fragment>
  );
}

export default MuiAppBar;

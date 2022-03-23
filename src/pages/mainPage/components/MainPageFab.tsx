import React from "react";

import { SpeedDial, SpeedDialAction, Zoom } from "@mui/material";
import { SxProps } from "@mui/system";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

interface MainPageFabProps {
  showFab: boolean;
}

const MainPageFab = (props: MainPageFabProps) => {
  const downloadResume = () => {
    window.location.href = "/Resume/SeanJoseph2022Resume.docx";
  };

  const SpeedDialStyle: SxProps = {
    position: "fixed",
    bottom: 16,
    right: 16,
  };

  return (
    <Zoom in={props.showFab}>
      <SpeedDial
        ariaLabel="Contact links speed dial"
        sx={SpeedDialStyle}
        direction="up"
        icon={<ConnectWithoutContactIcon />}
      >
        <SpeedDialAction
          key={"My LinkedIn Profile"}
          icon={<LinkedInIcon />}
          tooltipTitle={"My LinkedIn Profile"}
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/in/sean-joseph-41ab49114/";
          }}
        />

        <SpeedDialAction
          key={"My GitHub Profile"}
          icon={<GitHubIcon />}
          tooltipTitle={"My GitHub Profile"}
          onClick={() => {
            window.location.href = "https://github.com/sejogit28";
          }}
        />
        <SpeedDialAction
          key={"Download Updated Resume"}
          icon={<CloudDownloadIcon />}
          tooltipTitle={"Download  My Updated Resume"}
          onClick={() => {
            downloadResume();
          }}
        />
      </SpeedDial>
    </Zoom>
  );
};

export default MainPageFab;

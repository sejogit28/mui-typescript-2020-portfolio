import { useState } from "react";
import IntroSection from "./sections/introSection/IntroSection";
import ProjectSection from "./sections/projectsSection/ProjectSection";
import SkillsSection from "./sections/skillsSection/SkillsSection";

import MainPageFab from "./components/MainPageFab";
import { Container } from "@mui/material";

const PortfolioPage = () => {
  const [showFab, setShowFab] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 350) {
      setShowFab(true);
    } else if (scrolled <= 350) {
      setShowFab(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  //This page is the container for the actual content and will hold the 'section' components.
  return (
    <Container>
      <IntroSection />
      <ProjectSection />
      <SkillsSection />
      <MainPageFab showFab={showFab} />
    </Container>
  );
};

export default PortfolioPage;

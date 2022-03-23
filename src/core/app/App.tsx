import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PortfolioLayout from "../../layout/PortfolioLayout";
import PortfolioPage from "../../pages/mainPage/PortfolioPage";

// Finish animations
// Make 4th section for contact form
// Decide about Breadcrumbs scrolling links in appbar
// Decide about Drawer
// Make custom logo?

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route path="/" element={<PortfolioPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

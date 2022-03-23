import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PortfolioLayout from "../../layout/PortfolioLayout";
import PortfolioPage from "../../pages/mainPage/PortfolioPage";

// Finish animations
// Decide about Breadcrumbs scrolling links in appbar

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

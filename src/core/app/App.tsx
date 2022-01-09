import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

import PortfolioLayout from '../../layout/PortfolioLayout';
import PortfolioPage from '../../pages/mainPage/PortfolioPage';

//TODO: Make portfolio specific sideNav
//TODO: Make Speedial with contact related items
///Should only appear after first section
//TODO:Make background
///Will have to make a light mode config to work with particle....
//TODO:Make card for intro section
//TODO:
//TODO: Make custom logo?

function App() {
  return (
        <Router>
          <Routes>
            <Route element={<PortfolioLayout />}>
              <Route path='/' element={<PortfolioPage />} />
              
            </Route>
          </ Routes>
        </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import MuiTypography from './Components/MuiTypography';
import MuiButton from './Components/MuiButton';
import MuiTextbox from './Components/MuiTextbox';
import MuiSelect from './Components/MuiSelect';
import MuiRadioButton from './Components/MuiRadioButton';
import MuiCheckBox from './Components/MuiCheckBox';
import MuiSwitch from './Components/MuiSwitch';
import MuiRating from './Components/MuiRating';
import MuiAutoComplete from './Components/MuiAutoComplete';
import MuiLayout from './Components/MuiLayout';
import MuiCard from './Components/MuiCard';
import MuiAccordion from './Components/MuiAccordion';
import MuiImageList from './Components/MuiImageList';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MuiNavbar from './Components/MuiNavbar';
import MuiMenu from './Components/MuiMenu';
import MuiLink from './Components/MuiLink';
import MuiBreadcrumbs from './Components/MuiBreadcrumbs';
import MuiDrawer from './Components/MuiDrawer';
import MuiSpeedDial from './Components/MuiSpeedDial';
import MuiBottomNavigation from './Components/MuiBottomNavigation';
import MuiAvatar from './Components/MuiAvatar';
import MuiBadge from './Components/MuiBadge';
import MuiList from './Components/MuiList';
import MuiChip from './Components/MuiChip';

function App() {
  return (
    <div >
      <Router>
        <MuiNavbar/>
        <Routes>
          <Route path="/muitypography" element={<MuiTypography />}></Route>
          <Route path="/muibutton" element={<MuiButton />}></Route>
          <Route path="/muitextbox" element={<MuiTextbox />}></Route>
          <Route path="/muiselect" element={<MuiSelect />}></Route>
          <Route path="/muiradiobutton" element={<MuiRadioButton />}></Route>
          <Route path="/muicheckbox" element={<MuiCheckBox />}></Route>
          <Route path="/muiswitch" element={<MuiSwitch />}></Route>
          <Route path="/muirating" element={<MuiRating />}></Route>
          <Route path="/Muiautocomplete" element={<MuiAutoComplete />}></Route>
          <Route path="/muilayout" element={<MuiLayout />}></Route>
          <Route path="/muicard" element={<MuiCard />}></Route>
          <Route path="/muiaccordion" element={<MuiAccordion />}></Route>
          <Route path="/muiimagelist" element={<MuiImageList />}></Route>
          <Route path="/muimenu" element={<MuiMenu />}></Route>
          <Route path="/muilink" element={<MuiLink />}></Route>
          <Route path="/muibreadcrumb" element={<MuiBreadcrumbs />}></Route>
          <Route path="/muidrawer" element={<MuiDrawer />}></Route>
          <Route path="/muispeeddial" element={<MuiSpeedDial />}></Route>
          <Route path="/muibottomnavigation" element={<MuiBottomNavigation />}></Route>
          <Route path="/muiavatar" element={<MuiAvatar />}></Route>
          <Route path="/muibadge" element={<MuiBadge />}></Route>
          <Route path="/muilist" element={<MuiList />}></Route>
          <Route path="/muichip" element={<MuiChip />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

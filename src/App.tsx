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

function App() {
  return (
    <div >
      {/* <MuiTypography/> */}
      {/* <MuiButton /> */}
      {/* <MuiTextbox /> */}
      {/* <MuiSelect/> */}
      {/* <MuiRadioButton/> */}
      {/* <MuiCheckBox/> */}
      {/* <MuiSwitch /> */}
      {/* <MuiRating /> */}
      {/* <MuiAutoComplete />*/}
      {/* <MuiLayout/> */}
      {/* <MuiCard/> */}
      {/* <MuiAccording/> */}
      {/* <MuiImageList /> */}

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;

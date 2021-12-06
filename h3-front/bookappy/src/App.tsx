import React from 'react';
import { Button } from 'antd';
import Login from "./components/pages/Connexion/Login";
import Index from "./components/Index";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import './App.css';
import './components/NavigationAppli/NavBarHeader';
import IndexRegister from './components/pages/Inscription/IndexRegister';
import IndexLogin from './components/pages/Connexion/IndexLogin';
import Home from './components/pages/Home';
import Profil from './components/pages/Profil';
import IndexDetail from './components/IndexDetail';
import Welcome from './components/pages/Welcome';

import "./css/Style.css";
import DemoCarousel from './animation/DemoCarousel';
import IndexLibrary from './components/pages/Library/IndexLibrary';



class App extends React.Component<{}> {

  render() {
    return (
      <div className="App">
        <Router>
              <Routes>
                  <Route path="/" element={<Welcome/>}></Route>
                  <Route path="/home" element={<Home/>}></Route>
                  <Route path="/register" element={<IndexRegister/>}></Route>
                  <Route path="/login" element={<IndexLogin/>}></Route>
                  <Route path="/showbook" element={<Index/>}></Route>
                  <Route path="/showlibrary/:userId" element={<IndexLibrary/>}></Route>
                  <Route path="/profil" element={<Profil/>}></Route>
                  <Route path="/register" element={<IndexRegister/>}></Route>
                  <Route path="/login" element={<IndexLogin/>}></Route>
                  <Route path="/showbook/:isbn" element={<IndexDetail/>}></Route>
                  <Route path="/DemoCarousel" element={<DemoCarousel />} />
                  <Route path="/getuser/:userId" element={<IndexRegister />} />
              </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
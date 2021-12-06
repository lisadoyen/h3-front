import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import "../../css/Style.css";
import "../../css/NavBarHeader.css";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import UserProfile from "../userProfil/UserProfile";


import { useLocation } from 'react-router-dom';



export default function NavBarHeader() {
    const location = useLocation();
    const image = document.querySelector('#image');
    if(location.pathname == "/home"){
        return (
            <nav className= "navheader">
                <div className="row_navheader_center">
                    <div className ="col_navheader">
                        <img className ="img_navheader" src={`${process.env.PUBLIC_URL}/img/logo_degrade.svg`}/>
                    </div>
                    <div className ="col_icons_navheader">
                        <div className ="icon_col"><Tippy content={<span>Accueil</span>}><Link to="/home"><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_home.svg`}/></Link></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Rechercher</span>}><Link to="/showbook"><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_search.svg`}/></Link></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Bibliotheque</span>}><Link to={`/showlibrary/${UserProfile.getId()}`}><img id="showlibrary" className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_library.svg`}/></Link></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Notification</span>}><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_notification.svg`}/></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Message</span>}><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_discussion.svg`}/></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Profil</span>}><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_profil.svg`}/></Tippy></div>
                    </div>
                </div>
            </nav>
        )
    }
    else if(location.pathname == "/showbook"){
        return (
            <nav className= "navheader">
                <div className="row_navheader_center">
                    <div className ="col_navheader">
                        <img className ="img_navheader" src={`${process.env.PUBLIC_URL}/img/logo_degrade.svg`}/>
                    </div>
                    <div className ="col_icons_navheader">
                        <div className ="icon_col"><Tippy content={<span>Accueil</span>}><Link to="/home"><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_home_grey.svg`}/></Link></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Rechercher</span>}><Link to="/showbook"><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_search_orange.svg`}/></Link></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Bibliotheque</span>}><Link to={`/showlibrary/${UserProfile.getId()}`}><img id="showlibrary" className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_library.svg`}/></Link></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Notification</span>}><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_notification.svg`}/></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Message</span>}><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_discussion.svg`}/></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Profil</span>}><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_profil.svg`}/></Tippy></div>
                    </div>
                </div>
            </nav>
        )
    }
    else if(location.pathname == `/showlibrary/${UserProfile.getId()}`){
        return (
            <nav className= "navheader">
                <div className="row_navheader_center">
                    <div className ="col_navheader">
                        <img className ="img_navheader" src={`${process.env.PUBLIC_URL}/img/logo_degrade.svg`}/>
                    </div>
                    <div className ="col_icons_navheader">
                        <div className ="icon_col"><Tippy content={<span>Accueil</span>}><Link to="/home"><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_home_grey.svg`}/></Link></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Rechercher</span>}><Link to="/showbook"><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_search.svg`}/></Link></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Bibliotheque</span>}><Link to={`/showlibrary/${UserProfile.getId()}`}><img id="showlibrary" className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_library_orange.svg`}/></Link></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Notification</span>}><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_notification.svg`}/></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Message</span>}><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_discussion.svg`}/></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Profil</span>}><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_profil.svg`}/></Tippy></div>
                    </div>
                </div>
            </nav>
        )
    }
    else {
        return (
            <nav className= "navheader">
                <div className="row_navheader_center">
                    <div className ="col_navheader">
                        <img className ="img_navheader" src={`${process.env.PUBLIC_URL}/img/logo_degrade.svg`}/>
                    </div>
                    <div className ="col_icons_navheader">
                        <div className ="icon_col"><Tippy content={<span>Accueil</span>}><Link to="/home"><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_home_grey.svg`}/></Link></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Rechercher</span>}><Link to="/showbook"><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_search.svg`}/></Link></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Bibliotheque</span>}><Link to={`/showlibrary/${UserProfile.getId()}`}><img id="showlibrary" className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_library.svg`}/></Link></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Notification</span>}><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_notification.svg`}/></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Message</span>}><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_discussion.svg`}/></Tippy></div>
                        <div className ="icon_col"><Tippy content={<span>Profil</span>}><img className="icon_nav" src={`${process.env.PUBLIC_URL}/icone/icone_profil.svg`}/></Tippy></div>
                    </div>
                </div>
            </nav>
        )
    }
}

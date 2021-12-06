
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import "../../css/Style.css";
import "../../css/NavBarFooter.css";

export default function NavBarFooter() {
    return (
        <div>
            <div><Link to="/publication"><img className ="img_plus" src={`${process.env.PUBLIC_URL}/icone/plus.png`}/></Link></div>
        <nav className="navfooter">
            <div className="row_navfooter">
                <div className ="col_navfooter"><Link to="/accueil"></Link><img className ="icon" src={`${process.env.PUBLIC_URL}/icone/icone_dev.png`}/></div>
                <div className ="col_navfooter"><Link to="/showbook"><img className ="icon" src={`${process.env.PUBLIC_URL}/icone/icone_dev.png`}/></Link></div>
                <div className ="col_navfooter"><Link to="/bibliotheque"><img className ="icon" src={`${process.env.PUBLIC_URL}/icone/icone_dev.png`}/></Link></div>
                <div className ="col_navfooter"><Link to="/profil"><img className ="icon" src={`${process.env.PUBLIC_URL}/icone/icone_dev.png`}/></Link></div>
            </div>
        </nav>
        </div>
    )
}

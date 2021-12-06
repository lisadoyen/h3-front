
import {NavLink} from 'react-router-dom';
import DemoCarousel from '../../animation/DemoCarousel';
import "../../css/Welcome.css"

function Navigation() {

    return (
        <div>
            <div className="navigation">
              <div className="title">Bienvenue sur <img className ="" src={`${process.env.PUBLIC_URL}/img/logo_white.svg`}/></div>
              <div className="row">
                  <div className="col col_welcome">
                    <div className="carousel"><DemoCarousel/></div>
                </div>
                    <div className="col margin">
                        <NavLink to="/register"><div className="button_Inscription">Inscription</div></NavLink>
                        <NavLink to="/login"><div className="button_Connexion"> Connexion</div></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation

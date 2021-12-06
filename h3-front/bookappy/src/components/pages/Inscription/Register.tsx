
import React from "react";
import { User } from "../../../decl";
import "../../../css/Form.css";
import "../../../css/Style.css";
import { useNavigate } from "react-router-dom";
import UserProfile from "../../userProfil/UserProfile";
import DemoCarousel from "../../../animation/DemoCarousel";
import { postRegister } from "../../../api";


function withNavigation(Component:any) {
  return (props: any) => <Component {...props} navigate={useNavigate()} />;
}

export type RegisterProps = {
  onSuccess: (user: User) => void;
  navigate: any
};

export type RegisterState = {
  email: string;
  lastName: string,
  firstName:string,
  password: string,
  isModalVisible: boolean;
};

class Register extends React.Component<RegisterProps, RegisterState> {
  state = {
    id: "",
    lastName: "",
    firstName: "",
    password: "",
    email: "",
    isModalVisible: true,
  };

  handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, lastName, firstName, password, id } = this.state;
    try {
      const loggedUser = await postRegister({ id, email, lastName, firstName, password });
      this.props.onSuccess(loggedUser);
      UserProfile.setId(loggedUser.id);
      this.setState({ isModalVisible: false });
    } catch (error) {
      alert(error);
    }
  };

  render() {
    const { lastName, firstName, password, email, isModalVisible } = this.state;
    const {navigate} = this.props;
    return (
      <div className = "background">
        <div className="row">
        <div className= "col">
          <img className="logo_connexion" src={`${process.env.PUBLIC_URL}/img/logo_white.svg`}/>
          </div>
          <div className= "col col_form">
          <div className= "connexion"> Inscrivez-vous ! </div>
          <div className="row_form">
            <form onSubmit={event =>  {
                    this.handleFormSubmit(event);
                      navigate('/login');
                  }}>
              <input className="first"
                  type="firstname"
                  placeholder="Votre prénom..."
                  value={firstName}
                  onChange={(event) => this.setState({ firstName: event.target.value })}
                />
                <input className="second"
                  type="lastName"
                  placeholder="Votre nom..."
                  value={lastName}
                  onChange={(event) => this.setState({ lastName: event.target.value })}
                />
                <input className="third"
                  type="email"
                  placeholder="Votre e-mail..."
                  value={email}
                  onChange={(event) => this.setState({ email: event.target.value })}
                />
                <input 
                  type="password" className="fourth"
                  placeholder="Votre mot de passe..."
                  value={password}
                  onChange={(event) => this.setState({ password: event.target.value })}
                />

                <input className="button_Re" type="submit" value="S'inscrire" />
              </form>
              </div>
              <div className="row_form"><div className="co_subtitle fifth"><span>S'inscrire avec </span></div></div> 
                <div className="row fifth icon_rs">
                  <div className="col"><img className="icon_co" src={`${process.env.PUBLIC_URL}/img/logo_facebook.svg`}/></div> 
                  <div className="col"><img className="icon_co" src={`${process.env.PUBLIC_URL}/img/logo_google.svg`}/></div> 
                  <div className="col"><img className="icon_co" src={`${process.env.PUBLIC_URL}/img/logo_twitter.svg`}/></div> 
                  <div className="col"><img className="icon_co" src={`${process.env.PUBLIC_URL}/img/logo_vk.svg`}/></div> 
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default withNavigation(Register);


import React from "react";
import {  useNavigate  } from "react-router-dom";
import { postLogin } from "../../../api";
import { User } from "../../../decl";
import "../../../css/Style.css";
import "../../../css/Form.css";
import UserProfile from "../../userProfil/UserProfile";
import DemoCarousel from "../../../animation/DemoCarousel";

function withNavigation(Component:any) {
  return (props: any) => <Component {...props} navigate={useNavigate()} />;
}


export type LoginProps = {
  onSuccess: (user: User) => void;
  navigate: any
};

export type LoginState = {
  email: string,
  password: string,
  lastName: string, 
  firstName: string,
  isModalVisible: boolean;
};

class Login extends React.Component<LoginProps,LoginState> {
  
  state = {
    id: "",
    password: "",
    email: "",
    lastName: "", 
    firstName: "",
    isModalVisible: true,
  };


  handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password, lastName, firstName, id } = this.state;

    try {
      const loggedUser = await postLogin({ id, email, lastName, firstName, password});
      this.props.onSuccess(loggedUser);
      UserProfile.setId(loggedUser.id);
      this.setState({ isModalVisible: false });
    } catch (error) {
      alert(error);
    }
  };
  render() {
    
    const {navigate} = this.props;
    const {  password, email, isModalVisible } = this.state;
   
    return (
      <div className = "background">
        <div className="row">
          <div className= "col">
            <img className="logo_connexion" src={`${process.env.PUBLIC_URL}/img/logo_white.svg`}/>
          </div>
          <div className= "col col_form">
            <div className= "connexion"> Connectez-vous ! </div>
              <div className="row_form">
                <form
                  onSubmit={event =>  {
                    this.handleFormSubmit(event);
                    if (UserProfile.getId() != ""){
                      navigate('/home');
                    }
                  }}
                >
                  <input className="first"
                    type="E-mail"
                    placeholder="Votre email..."
                    value={email}
                    onChange={(event) => this.setState({ email: event.target.value })}
                  />
                    <input className="second"
                      type="password"
                      placeholder="Votre mot de passe..."
                      value={password}
                      onChange={(event) => this.setState({ password: event.target.value })}
                    />
                  <input className="button_Co" type="submit" value="Connexion"/>
                  </form>
                  </div>
                <div className="row_form"><div className="co_subtitle icon_anim"><span>Se connecter avec </span></div></div> 
                <div className="row icon_anim icon_rs">
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


export default withNavigation(Login);


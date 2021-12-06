import  React from 'react';
import { User } from "../../../decl";
import Login from "./Login";


import "../../../css/Style.css";

export type AppState = {
  user: User | undefined;
};

class IndexLogin extends React.Component<{}, AppState> {
  state = {
    user: undefined,
  };

  render() {
    const { user } = this.state;
    //const [verifyUser, setVerifyUser] = useSessionStorage('user', user);
   
    return (
        <Login
          onSuccess={(user: User) => {
            this.setState({ user: user });
            //setVerifyUser(user)
          }}/>
    );
  }
}

export default IndexLogin

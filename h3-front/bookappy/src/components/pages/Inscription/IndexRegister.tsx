import React from 'react';
import { User } from "../../../decl";
import Register from "./Register";


export type AppState = {
  user: User | undefined;
};

class IndexRegister extends React.Component<{}, AppState> {
  state = {
    user: undefined,
  };

  render() {
    const { user } = this.state;
    return (
        <Register
          onSuccess={(user:User) => {
            this.setState({ user: user });
          }}
        />
    );
  }
}

export default IndexRegister

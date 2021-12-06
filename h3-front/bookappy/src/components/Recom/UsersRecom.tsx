import React from "react";
import { Book, User, Users } from "../../decl";


export type UsersProps = {
    book: Book;
    users: Users|undefined;
  };


class UsersRecom extends React.Component<UsersProps> {

  render() {
    let users =this.props.users;
    if(!users) users = [];
    return (
      <div>
        <div className="row_filter">
          {users.map((user: User) => (
            <div key={user.id} className="row_book">
              <div className="col"><img className="icon_search" src={`${process.env.PUBLIC_URL}/icone/icone_profil.svg`}/></div>
              <div className="col">{user.firstName} {user.lastName} </div>
              <div className="col"><button className="button_recom">Suivre</button></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UsersRecom;
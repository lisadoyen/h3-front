import React from "react";
import { Link } from "react-router-dom";
import { getUsersFromBook } from "../../api";
import { Book, Books, User, Users } from "../../decl";
import UserProfile from "../userProfil/UserProfile";


export type UsersProps = {
    book: Book;
    books: Books|undefined;
  };


  function GetImage(props:any){
    const books = props.img;
    if(books.image == ""){
      return (
          <img className ="img_recom" src={`${process.env.PUBLIC_URL}/icone/icone_no_picture.png`} height= "100" width="100"/>
          
      )
    }else{
      return (
          <img className ="img_recom" src={
          books.image} alt={books.title}></img>
          
      )
    }
  }

class BooksRecom extends React.Component<UsersProps> {

  render() {
    let books =this.props.books;
    if(!books) books = [];
    return (
      <div>
        <div className="row_filter">{books.map((book: Book) => (
            <div key={book.id} className="row_book">
                <div className="col"><GetImage img={book}/></div>
                <div className="col title_recom">{book.title}</div>
                
                <div className="col"><Link to={`/showbook/${book.isbn}`}><button className="button_recom">Voir</button></Link></div>
                
            </div>
            ))}
        </div>
      </div>
    );
  }
}

export default BooksRecom;
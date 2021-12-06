import React, { Component } from "react";
import { Book,  Tag, User, Users } from "../decl";
import '../App.css';

import "../css/Style.css";
import "../css/BookDetail.css";
import NavBarHeader from "./NavigationAppli/NavBarHeader";
import { getUsersFromBook, putAddBookToLib, verifyBook } from "../api";
import UserProfile from "./userProfil/UserProfile";
import UsersRecom from "./Recom/UsersRecom";
import BooksRecom from "./Recom/BooksRecom";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";


export type BookProps = {
    book: Book;
  };

async function ButtonAdd(book:any){
  const test = async() => {
    console.log(book.book);
    const res = await verifyBook(UserProfile.getId(), book.book.id);
    if (res == true) {
      return (
        <input className="input_addBook" type="button" value="Déjà dans la bibliothèque"/>
      );
    }
    return (
      <input className="input_addBook" type="button" value="" onClick={e=> putAddBookToLib(UserProfile.getId(), book.book.id)}/>
    );
  }
  return test();
}


function GetImage(props:any){
  const books = props.img;
  if(books.image == ""){
    return (
      <Tippy content={<span>titre :{books.title} </span>}>
      <Link to={`/showbook/${books.isbn}`} >
        <img className ="img_bookDetail" src={`${process.env.PUBLIC_URL}/icone/icone_no_picture.png`} height= "100" width="100"/>
        </Link>
        </Tippy>
    )
  }else{
    return (
      <Tippy content={<span>titre :{books.title} </span>}>
      <Link to={`/showbook/${books.isbn}`} >
        <img className ="img_bookDetail" src={books.image} alt={books.title}></img>
        </Link>
        </Tippy>
    )
  }
}


class BookDetail extends React.Component<BookProps> {

  /*test = async () => {
    const book = this.props.book;
    const button = document.querySelector('#testButton');
    console.log(button);
    if(book != undefined && button) {
      const res = await verifyBook(UserProfile.getId(), book.id);
      if (res == true) {
        button.setAttribute('value','Déjà');
        button.setAttribute('disabled', 'true');
      }else {
        button.setAttribute('value','Ajouter à ma bibliothèque');
        button.setAttribute('disabled', 'false');

        button.setAttribute('onClick', ''+putAddBookToLib(UserProfile.getId(), book.id));
      }
    }
  }
  */

  render() {
    const book = this.props.book;

    return (
      <div>
         <NavBarHeader/>
        <div className = "row row_component">
          <div className= "col">
            <div className= "row_filter img_font">
              <GetImage img={book}/>
            </div>
              <div className="row_filter_block">
                <input className="input_addBook" type="button" id='testButton' value="Ajouter à ma bibliothèque" onClick={e=> putAddBookToLib(UserProfile.getId(), book.id)}/>
                  <div className="row_field">
                    <div className= "col_field"><img className="icon_search" src={`${process.env.PUBLIC_URL}/icone/icone_profil.svg`}/></div>
                    <div className= "col_field_2">Editeur - &nbsp;<div className="color-attributs">{book.editor}</div></div>
                  </div>
                <div className="row_filter">
                  <div className="row_field">
                    <div className= "col_field"><img className="icon_search" src={`${process.env.PUBLIC_URL}/icone/icone_isbn.svg`}/></div>
                    <div className= "col_field_2">ISBN - &nbsp;<div className="color-attributs">{book.isbn}</div></div>
                  </div>
                </div>
                <div className="row_filter">
                  <div className="row_field">
                    <div className= "col_field"><img className="icon_search" src={`${process.env.PUBLIC_URL}/icone/icone_langue.svg`}/></div>
                    <div className= "col_field_2">Langue - &nbsp;<div className="color-attributs">{book.language}</div></div>
                  </div>
                </div>
                <div className="row_filter">
                  <div className="row_field">
                    <div className= "col_field"><img className="icon_search" src={`${process.env.PUBLIC_URL}/icone/icone_categorie.svg`}/></div>
                    <div className= "col_field_2">Categorie - &nbsp;<div className="color-attributs">{book.categorie}</div></div>
                  </div>
                </div>
                <div className="row_filter">
                  <div className="row_field">
                    <div className= "col_field"><img className="icon_search" src={`${process.env.PUBLIC_URL}/icone/icone_tranche_age.svg`}/></div>
                    <div className= "col_field_2">Date de publication - &nbsp;<div className="color-attributs">{book.publishDate}</div>  </div>
                  </div>
                </div>
                <div className="row_filter">
                  <div className="row_field">
                    <div className= "col_field"><img className="icon_search" src={`${process.env.PUBLIC_URL}/icone/icone_tranche_age.svg`}/></div>
                    <div className= "col_field_2">Tranche d'âge - &nbsp;<div className="color-attributs">{book.ageRange}</div> </div>
                  </div>
                </div>
              </div>
              <div className= "row_filter_block">
              <div className="row_filter_title">LES TAGS ASSOCIÉS</div>
              <hr/>
                <div className="row_filter">{book.tags.map((tag: Tag) => (
                    <div key={tag.id} className="col_book tag">#{tag.wording}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className= "col">
              <div className= "row_filter_block">
                <div className="row title_detail">{book.title}</div>
                <div className="col">
                  <div className= "row">{book.author} - {book.publishDate}</div>
                </div>
                <div className="col">
                  <div className= "row subtitle">Sous-titre : {book.subtitle}</div>
                </div>
                <div className="col">
                  <div className= "row description">{book.description}</div>
                </div>
              </div>
              <div className= "row">
                <img src={`${process.env.PUBLIC_URL}/img/img_avis.svg`}/>
              </div>
              <div className= "row_filter_block">
                <div className= "row_filter">Espace commentaires...</div>
              </div>
            </div>
            <div className= "col">
              <div className= "row_filter"><img  src={`${process.env.PUBLIC_URL}/img/img_premium.svg`}></img></div>
              <div className= "row_filter_block">
               <div className= "row_filter"> Il est dans leur bibliothèque : </div><hr/>
                  <UsersRecom book={book} users={book.users} ></UsersRecom> 
              </div>
              <div className= "row_filter_block">
               <div className= "row_filte row_filter_title"> LIVRES SIMILAIRES ... </div><hr/>
                  <BooksRecom book={book} books={book.books} ></BooksRecom> 
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetail;
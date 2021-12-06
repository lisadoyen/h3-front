import React from "react";
import { Book, Books, Tag, Tags } from "../decl";
import { Button, Input } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import '../App.css';

import "../css/Style.css";
import "../css/BooksComponent.css";
import Form from "antd/lib/form/Form";
import Tippy from "@tippyjs/react";
/*import GetImage from "./GetImage";*/

export type BooksProps = {
    books: Books;
    tags: Tags
  };

  function GetImage(props:any){
    const books = props.img;
    if(books.image == ""){
      return (
        <Tippy content={<span>titre :{books.title} </span>}>
        <Link to={`/showbook/${books.isbn}`} >
          <img className ="img_booksComponent" src={`${process.env.PUBLIC_URL}/icone/icone_no_picture.png`} height= "100" width="100"/>
          </Link>
          </Tippy>
      )
    }else{
      return (
        <Tippy content={<span>titre :{books.title} </span>}>
        <Link to={`/showbook/${books.isbn}`} >
          <img className ="img_booksComponent" src={
          books.image} alt={books.title}></img>
          </Link>
          </Tippy>
      )
    }
  }

  

class BooksComponent extends React.Component<BooksProps> {
  //<GetImage img={book.image}/>
  render() {
    const { books, tags } = this.props;
    return (
      <div className="row row_component">
        <div className= "col_search">
          <div className="row_filter_block">
              <div className="row_filter_title">RECHERCHE PAR</div>
                <div className="row_field">
                  <div className= "col_field"><img className="icon_search" src={`${process.env.PUBLIC_URL}/icone/icone_profil.svg`}/></div>
                  <div className= "col_field_2">Editeur</div>
                </div>
              <div className="row_filter">
                <div className="row_field">
                  <div className= "col_field"><img className="icon_search" src={`${process.env.PUBLIC_URL}/icone/icone_isbn.svg`}/></div>
                  <div className= "col_field_2">ISBN</div>
                </div>
              </div>
              <div className="row_filter">
                <div className="row_field">
                  <div className= "col_field"><img className="icon_search" src={`${process.env.PUBLIC_URL}/icone/icone_langue.svg`}/></div>
                  <div className= "col_field_2">Langue</div>
                </div>
              </div>
              <div className="row_filter">
                <div className="row_field">
                  <div className= "col_field"><img className="icon_search" src={`${process.env.PUBLIC_URL}/icone/icone_categorie.svg`}/></div>
                  <div className= "col_field_2">Categorie</div>
                </div>
              </div>
              <div className="row_filter">
                <div className="row_field">
                  <div className= "col_field"><img className="icon_search" src={`${process.env.PUBLIC_URL}/icone/icone_tranche_age.svg`}/></div>
                  <div className= "col_field_2">Date de publication</div>
                </div>
              </div>
              <div className="row_filter">
                <div className="row_field">
                  <div className= "col_field"><img className="icon_search" src={`${process.env.PUBLIC_URL}/icone/icone_tranche_age.svg`}/></div>
                  <div className= "col_field_2">Tranche d'âge</div>
                </div>
              </div>
            </div>
            <div className="row_filter_block">
              <div className="row_filter_title">RECHERCHE PAR TAG</div><hr/>
              <div className="row_filter">{tags.map((tag: Tag) => (
                <div key={tag.id} className= "col_book tag">#{tag.wording}
                </div>
              ))}</div>
            </div>
            <div className="row_filter_block">
              <div className="row_filter">Il pourrait vous plaire :</div>
              <div className="row_filter">Tableau de livre (recommendations) à mettre</div>
            </div>
        </div>

        <div className= "col">
          
          <Form className="form_search"
            name="basic">
              <div className="row row_nav">
              <div className="col">
              <Input placeholder="Rechercher" className="input_search"/></div>
              <div className="col">
              <Tippy content={<span>Rechercher(icone loupe)</span>}><Link to="/search"><img  src={`${process.env.PUBLIC_URL}/icone/icone_search.svg`}/></Link></Tippy>
              </div>
              </div>
            </Form>
          
          <div className ="row_book">
              {books.map((book: Book) => (
                <div key={book.id} className="col_book">
                  <GetImage img={book}/>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default BooksComponent;
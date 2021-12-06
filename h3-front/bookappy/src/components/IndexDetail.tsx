
import '../App.css';
import React from "react";
import { Book } from "../decl";
import "../css/Style.css";
import GetParams from "./GetParameters/GetParams";

export type IndexDetailState = {
  book: Book
}

class IndexDetail extends React.Component<{}, IndexDetailState> {
  
  state = {
    book: {
      id: '',
      title: '',
      image: '',
      isbn: '',
      editor: '',
      author: '',
      language: '',
      categorie: '',
      subtitle: '',
      description: '',
      tags: [],
      publishDate: '',
      ageRange: ''
    }
  };
  
  fetchPages = async () => {
    /*const { match } = useParams()*/
    //const { isbn } = useParams()
    //console.log(isbn)
    
    //const book = await getIsbn(isbn);
    //this.setState({ book: book });
  };
  
  componentDidMount() {
    /*const { isbn } = useParams()*/
    this.fetchPages();
  }

      render() {
        const book = this.state.book;
        return (
            <div>
               
                <GetParams book={book}/>
            </div>
            
        );
      }
}

export default IndexDetail;


import React from "react";
import { getBook, getTag } from "../api";
import BooksComponent from "../components/BooksComponent";
import NavBarHeader from "./NavigationAppli/NavBarHeader";



class Index extends React.Component<{}> {
  
  state = {
    books: [],
    tags: []
  };
  
  fetchPages = async () => {
    const books = await getBook();
    const tags = await getTag();
    this.setState({ books: books, tags: tags });
  };
  
  componentDidMount() {
    this.fetchPages();
  }
  
  render() {
    const {books, tags} = this.state;
    return (
      <div className="App">
            <NavBarHeader/>
            <BooksComponent books={books} tags={tags}></BooksComponent>
        </div>
    );
  }
}

export default Index;
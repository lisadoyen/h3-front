import React, { useState, useEffect } from 'react';
import BookDetail from "../BookDetail";
import { getBooksFromBook, getIsbn, getUsersFromBook } from "../../api";
import { Book, User, Users} from "../../decl";
import {useParams} from "react-router-dom";
import UserProfile from '../userProfil/UserProfile';

type IndexDetailState = {
  book: Book
}
const GetParams: React.FC<IndexDetailState> = ({book}) => {
  const [state, setStateBook] = useState(book);
  const params = useParams();
  

  const fetchPages = async () => {
    
    const book = await getIsbn(params.isbn);
    const users = await getUsersFromBook(UserProfile.getId(), book.id);
    const books = await getBooksFromBook(book.id);
    book.users = users;
    book.books = books;
    setStateBook(book);

  };

  useEffect(() => {
    fetchPages();
  })
  return(
          <div>
              <BookDetail book={state}></BookDetail>
          </div>
  )
  }

export default GetParams;

import { Book } from "./book.decl";

export type Library = {
    id: string;
    books: Array<Book>
  };
  
  export type Libraries = Library[];
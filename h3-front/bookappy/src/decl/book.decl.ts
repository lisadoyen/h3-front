import { Tag } from "./tag.decl";
import { Users } from "./user.decl";

export type Book = {
    id: string;
    title: string;
    image: string;
    isbn: string;
    categorie: string;
    editor: string;
    author: string;
    language: string;
    subtitle: string;
    description: string;
    tags: Array<Tag>;
    publishDate: string;
    ageRange:string;
    users?: Users;
    books?: Books;
  };
  
  export type Books = Book[];
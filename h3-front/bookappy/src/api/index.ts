import axios from "axios";
import { Books, Book, User, Tags, Libraries, Users } from "../decl";

export const getBook = async (): Promise<Books> => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/showbook`
    );
    return res.data;
  } catch (error) {
    console.error("error", error);
    return [];
  }
};

export const verifyBook = async (userId:string | undefined, id:string | undefined): Promise<boolean> => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/verify/${userId}/${id}`
    );
    return res.data;
  } catch (error) {
    console.error("error", error);
    //throw new Error("An error occurred verifying the book.");
    return false;
  }
};

export const getTag = async (): Promise<Tags> => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/showtags`
    );
    return res.data;
  } catch (error) {
    console.error("error", error);
    return [];
  }
};

export const getLibrary = async (userId:string | undefined): Promise<Libraries> => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/showlibrary/${userId}`
    );
    return res.data;
  } catch (error) {
    throw new Error("An error occurred loading the library.");
  }
};


export const getIsbn = async (isbn:string | undefined): Promise<Book> => {
  const Book:Book = {
    id: '',
    title: '',
    image: '',
    isbn: '',
    categorie:  '',
    editor: '',
    author: '',
    language: '',
    subtitle: '',
    description: '',
    tags: [],
    publishDate: '',
    ageRange: '',
  };
  try { 
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/showbook/${isbn}`
    );
    Book.id = res.data.id;
    Book.title = res.data.title;
    Book.image = res.data.image;
    Book.isbn = res.data.isbn;
    Book.editor = res.data.editor;
    Book.author = res.data.author;
    Book.language = res.data.language;
    Book.subtitle = res.data.subtitle;
    Book.description = res.data.description;
    Book.tags = res.data.tags;
    Book.categorie = res.data.categorie;
    Book.publishDate = res.data.publishDate;
    Book.ageRange = res.data.ageRange;
    return Book;
  } catch (error) {
    throw new Error("An error occurred going to book detail.");
  }
};

export const getBooksFromBook = async (bookId:string): Promise<Books> => {
  const books: Books = [];
  try { 
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/recommendationTag/${bookId}`
    );
    
    for (const bookTab in res.data) {
      const data = res.data[bookTab];
      const bookTemp:Book = {
        id: data.id,
        title: data.title,
        isbn: data.isbn,
        description: data.description,
        categorie: data.categorie,
        publishDate: data.publishDate,
        ageRange: data.ageRange,
        language: data.language,
        tags: data.tags,
        subtitle: data.subtitle,
        author: data.author,
        editor: data.editor,
        image: data.image,
        users: data.users,
        books: data.books
      };
      books.push(bookTemp);
    }
    return books;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getUsersFromBook = async (userId:string | undefined,  bookId:string | undefined): Promise<Users> => {
  const users: Users = [];

  try { 
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/recommendation/${userId}/${bookId}`
    );
    
    for (const userTab in res.data) {
      const data = res.data[userTab];
      const userTemp:User = {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        picture: data.picture
      };
      users.push(userTemp);
    }
    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
};



export const postRegister = async (user: User): Promise<User> => {

  const user2:User = {
    id: '',
    email: '',
    password: '',
    lastName: '',
    firstName: ''
  };

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/register`, 
      user
    ).then(response => {
      user2.id = response.data.id;
      user2.email = response.data.email;
      user2.password = response.data.password;
      user2.lastName = response.data.lastName;
      user2.firstName = response.data.firstName;
    });
    return user2;
    //return res.data;
  } catch (error) {
    throw new Error("An error occurred register the user.");
  }
};


export const postLogin = async (user: User): Promise<User> => {
  
  const user2:User = {
    id: '',
    email: '',
    password: '',
    lastName: '',
    firstName: ''
  };
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/login`,
      user
    );
    return res.data;
  } catch (error) {
    throw new Error("An error occurred saving the user.");
  }
};

export const putAddBookToLib = async (userId:string | undefined, id:string | undefined): Promise<Book> => {
  const Book:Book = {
    id: '',
    title: '',
    image: '',
    isbn: '',
    editor: '',
    author: '',
    language: '',
    subtitle: '',
    description: '',
    categorie:  '',
    tags: [],
    publishDate: '',
    ageRange: ''
  };
  console.log(id);
  console.log(userId);
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/addbook/${userId}/${id}`,
    );
    Book.id = res.data.id;
    Book.title = res.data.title;
    Book.image = res.data.image;
    Book.isbn = res.data.isbn;
    Book.editor = res.data.editor;
    Book.author = res.data.author;
    Book.language = res.data.language;
    Book.subtitle = res.data.subtitle;
    Book.categorie = res.data.categorie;
    Book.description = res.data.description;
    Book.tags = res.data.tags;
    Book.publishDate = res.data.publishDate;
    Book.ageRange = res.data.ageRange;
    alert('Livre ajouté !');
    return Book;
  } catch (error) {
    alert("error")
    console.log(error);
    throw new Error("An error occurred saving the book in library.");
  }
};
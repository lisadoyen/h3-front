import React from 'react'
import { Book,  Library } from '../../../decl';
import "../../../css/Style.css";
import "../../../css/LibraryBook.css";
import { Link } from 'react-router-dom';

/* tentative drag and drop => fail */
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {DropResult} from "react-beautiful-dnd";
import Tippy from '@tippyjs/react';


export type LibraryProps = {
    library: Library;
  };


  function GetImage(props:any, provided:any){
    const books = props.img;
    if(books.image == ""){
      return (
        <Tippy content={<span>titre :{books.title} </span>}>
        <Link to={`/showbook/${books.isbn}`} >
          <img className ="img_booksComponent" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
          src={`${process.env.PUBLIC_URL}/icone/icone_no_picture.png`} height= "100" width="100" alt={books.title}/>
          </Link>
          </Tippy>
      )
    }else{
      return (
        <Tippy content={<span>titre : {books.title}</span>}>
        <Link to={`/showbook/${books.isbn}`} >
          <img className ="img_booksComponent" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
          src={books.image} alt={books.title}></img>
          </Link></Tippy>
      )
    }
  }


class LibraryBook extends React.Component<LibraryProps> {
    render(){
        const { library } = this.props;
        
        const onDragEnd = (result: DropResult) => {
          const {source, destination} = result;
          if(!destination) return
          
          const items = Array.from(library.books)
          const [newOrder] = items.splice(source.index, 1)
          items.splice(destination.index, 0, newOrder);
          console.log(destination.index)
          this.setState(library);
        }
        return (
            <div className="row_component">
                 <div className="row_filter lib_row">
                   <div className="title_lib">Tout mes livres</div>
                   <DragDropContext onDragEnd={onDragEnd}>
                     <Droppable droppableId="library.books" direction="horizontal">
                      {(provided) => (
                        <div className="row row_book_lib" {...provided.droppableProps} ref={provided.innerRef}>
                            {library.books.map((book: Book, index) => {
                              return (
                                <div className="img_lib">
                                <Draggable key={book.id} draggableId={""+book.id+""} index = {index}>
                                  {(provided) =>(
                                    <GetImage img={book} provided={provided}></GetImage>
                                  )}
                                </Draggable>
                                </div>
                              )
                            })}
                        </div>
                      )}
                      
                   </Droppable>
                   </DragDropContext>
                   </div>
                 <div className="row_filter lib_row">
                 <div className="title_lib">J'ai</div>
                 </div>
                 <div className="row_filter lib_row">
                   <div className="title_lib">Je veux</div>
                 </div>
                 <div className="row_filter lib_row">
                 <div className="title_lib">Je lis</div>
                 </div>
                 <div className="row_filter lib_row">
                   <div className="title_lib">J'ai lu</div>
                 </div>
                 <div className="row_filter lib_row">
                   <div className="title_lib">J'aime</div>
                 </div>
            </div>
        )
    }
    
}

export default LibraryBook

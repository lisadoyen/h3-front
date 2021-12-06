import React from 'react'
import { getLibrary } from '../../../api';
import NavBarHeader from '../../NavigationAppli/NavBarHeader';
import UserProfile from '../../userProfil/UserProfile';
import LibraryBook from './LibraryBook';

import {DropResult} from "react-beautiful-dnd";

class IndexLibrary extends React.Component<{}> { 
    
    state = {
        library: {
            id: '',
            books: []
        },
    };

  fetchPages = async () => {
    console.log(UserProfile.getId());
    const library = await getLibrary(UserProfile.getId());
    this.setState({library: library});
  };
  
  componentDidMount() {
    this.fetchPages();
  }
    render() {
        const library = this.state.library;
        
        
        

        return (
            <div className="App"> 
               <NavBarHeader/>
                <LibraryBook library={library}/>
            </div>
        )
    }
}

export default IndexLibrary

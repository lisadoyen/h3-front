import "../../css/Home.css";
import NavBarHeader from '../NavigationAppli/NavBarHeader'

function Home() {

    return (
        <div className="App"> 
           <NavBarHeader/>
           <div className="row row_component">
               <div className="col">
                   <div className= "row_filter"><img className="img_home" src={`${process.env.PUBLIC_URL}/img/img_recom_book.svg`}/></div>
                   <div className= "row_filter"><img className="img_home" src={`${process.env.PUBLIC_URL}/img/img_tags.svg`}/></div>
               </div>
                <div className="col">
                    <div className= "row_filter"><img className="img_home_write" src={`${process.env.PUBLIC_URL}/img/img_write_post.svg`}/></div>
                   <div className= "row_filter"><img className="img_home" src={`${process.env.PUBLIC_URL}/img/img_nouveaute.svg`}/></div>
                   <div className= "row_filter"><img className="img_home" src={`${process.env.PUBLIC_URL}/img/img_post.svg`}/></div>
               </div>
                <div className="col">
                    <div className= "row_filter"><img src={`${process.env.PUBLIC_URL}/img/img_premium.svg`}/></div>
                    <div className= "row_filter"><img className="img_home" src={`${process.env.PUBLIC_URL}/img/img_suggestions.svg`}/></div>
               </div>
            </div>
        </div>
    )
}

export default Home

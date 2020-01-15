import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Article from './components/Article';
import Ads from './components/Ads';
import News from './components/News/News';
import {BrowserRouter, Route} from "react-router-dom";
import profileReducer from "./redux/profile-reducer";
import dialogsReducer from "./redux/dialogs-reducer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Footer/>
                <Article/>
                <Ads/>

                <div className='app-wrapper-content'>
                    <Route path='/Dialogs'
                           render={() => <DialogsContainer/>}/>


                    <Route path='/Nav'
                           render={() => <Nav/>}/>

                    <Route path='/News'
                           render={() => <News/>}/>

                    <Route path='/Users'
                           render={() => <UsersContainer/> }/>
                </div>
            </div>
        </BrowserRouter>
    )


};


export default App;
import React from 'react';
import s1 from './Nav.module.css';
import MyPosts from './Nav/Myposts/Myposts.jsx';
import NavInfo from "./Nav/Navinfo/NavInfo.jsx";
import MyPostsContainer from "./Nav/Myposts/MypostsContainer";
import store from "../redux/store";


const Nav = (props) => {
    return (
        <div>
             <NavInfo />

            <MyPostsContainer />

        </div>
)

};

export default Nav;
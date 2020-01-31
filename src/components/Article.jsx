import React from 'react';
import s from'./Article.module.css';
import { NavLink } from "react-router-dom";

const Article = () => {
    return (

        <div className={s.Article}>
            <div className={s.bloc}>
           <h1>Main</h1>
            <div className={s.item1}>
                <NavLink to="/News/" activeClassName={s.activeLink}> News</NavLink>
               </div>
                <div className={s.item2} >
                <NavLink to="/Nav/" activeClassName={s.activeLink}> Nav</NavLink>
            </div>
            <div className={s.item3} >
                <NavLink to="/Dialogs" activeClassName={s.activeLink}> Dialogs</NavLink>
            </div>
            <div className={s.item4} >
                <NavLink to="/Users" activeClassName={s.activeLink}> Users</NavLink>
            </div>
        </div>
          </div>);   
            
}

export default Article;
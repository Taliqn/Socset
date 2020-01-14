import React from 'react';
import s from './Ads.module.css';
import Posts from "./Nav/Myposts/Posts/Posts";




const Ads = (props) => {

   /* let friendsElements =
       props.friends.map( f => <friends name={f.name} id={f.id}/> );*/

    return (
        <div className={s.Ads}>
            <h3>Friends</h3>
            <div className={s.friends} >
                <img src='http://art1.ru/wp-content/uploads/2015/12/4213614179_a00cdf823c_o.jpg' />

            </div>
            <div className={s.friends} >

            </div>


        </div>);

}

export default Ads;





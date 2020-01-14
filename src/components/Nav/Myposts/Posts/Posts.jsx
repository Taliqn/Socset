import React from 'react';
import s from './Posts.module.css';





const Post = (props) => {
    return (
        <div className={s.item}>

            <img src='http://art1.ru/wp-content/uploads/2015/12/4213614179_a00cdf823c_o.jpg' />

            {props.messages}
            
            <div>
                <span>Like</span> { props.likesCount }
            </div>
        </div>);

          

}
        
             


export default Post;
          

         
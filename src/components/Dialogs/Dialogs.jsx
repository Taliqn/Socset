import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) =>

  {
      let state = props.dialogsPage;


    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/> );
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
     let body = e.target.value;
     props.updateNewMessageBody(body);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div className={s.but}>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={ onNewMessageChange }
                                  placeholder='Enter your messages'></textarea>
                    </div>

                    <div><button onClick={ onSendMessageClick } >Add messages</button></div>
                    </div>
                </div>
            </div>
        </div>
)
};
    export default Dialogs;





















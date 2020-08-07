import React from 'react';
import ReactEmoji from 'react-emoji';

import './Message.css';
import { Box } from '@material-ui/core';

const Message = ({message: {user, text}, name}) => {
let isSentByCurrentUser = false;

const trimmedName = name.trim().toLowerCase();

if(user === trimmedName){
    isSentByCurrentUser = true;
}

return (

    isSentByCurrentUser 
    ? (
<Box className="messageContainer justifyEnd">

<div className="messageBox backgroundBlue">
    <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
</div>
</Box>
    )
    : (
<Box className="messageContainer justifyStart">

<div className="messageBox backgroundLight">
    <p className="sentText pl-10">{user}</p>
    <p className="messageText colorDark">{text}</p>
</div>

</Box>
    )
)

}

export default Message;
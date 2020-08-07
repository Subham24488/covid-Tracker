import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import {Box, Grid} from '@material-ui/core'

import './Chat.css';

let socket;
 
const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    
    const ENDPOINT = 'https://chat-app24488.herokuapp.com/';
    
useEffect(() => {
const {name, room} = queryString.parse(location.search);

socket = io(ENDPOINT);

setName(name);
setRoom(room);


socket.emit('join', {name, room}, (error) => {
    if(error){
        alert(error);
    }

});

return () => {


    socket.emit('disconnect');

    socket.off();
}

}, [ENDPOINT, location.search]);

useEffect(() => {
    socket.on('message', (message) => {
        setMessages([...messages, message]);
    });
    socket.on("roomData", ({ users }) => {
        setUsers(users);
      });
},[messages]);

const sendMessage = (event) => {
    event.preventDefault();

    if(message){
        socket.emit('sendMessage', message, () => setMessage(''));
    }
}


    return(
        
       <Box className="outerContainer">
<Grid xs={12} className="container">
<InfoBar room={room}  users={users}/>

<Messages messages={messages} name={name}/>

<Input message={message}
setMessage={setMessage}
sendMessage={sendMessage} />

</Grid>
{/* <Grid xs={4}>
<TextContainer users={users}/>
</Grid> */}
</Box>    
    )
}

export default Chat;
import React from 'react';
import {Button, Box, TextField} from '@material-ui/core'

import './Input.css';

const Input = ({message, setMessage, sendMessage}) => (
    <Box className="inputOuterContainer">
<form className="form">
<TextField 
fullWidth
className="input"
type="text"
placeholder="Type a messege.."
value={message}
onChange={(event) => setMessage(event.target.value)}
onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
/>
<Button className="sendButton" onClick={(event) => sendMessage(event)}>Send</Button>
</form>
</Box>
)

export default Input;
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { TextField, Button, Grid, Box} from '@material-ui/core'

import './Join.css';
 
const Join = () => {
const [name, setName] = useState('');
const [room, setRoom] = useState('');


    return(
        <Box>
        <Grid className="joinOuterContainer" >
            <div className="joinInnerContainer" >
               
                <h1 className="heading">Create or Join an existing room!</h1>
                <div><TextField required label="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} ></TextField></div>
                <div><TextField required label="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)}></TextField></div>
                 <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room} `}>
                     <Button className="button mt-20" type="submit">Sign In </Button>
                 </Link>
                 
            </div>
        </Grid>
        </Box>
    )
}

export default Join;
import React from 'react';
import './TextContainer.css';
import { Box, Typography, FormControl, Select, MenuItem} from '@material-ui/core';
import onlineIcon from '../../icons/onlineIcon.png'

const TextContainer = ({users}) => (

    <Box className = "textContainer">
        <Typography variant="h6"><span role="img" aria-label="emoji">💬</span>Active Users </Typography>
        <div>
        {
      users
        ? (
          <div>
         
            <div className="activeContainer">
            
            <FormControl >
           
        <Select
          labelId="select-label"
          id="select"
        >
                {users.map(({name},i) =>  (
                  <MenuItem ><img className="onlineIcon" src={onlineIcon} alt="online"></img>{name}</MenuItem>
                    ))}
            </Select>
        </FormControl>
              </div>
            </div>
          
        )
        : null
    }
    </div>
    </Box>
);

export default TextContainer;
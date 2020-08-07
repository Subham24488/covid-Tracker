import React from 'react';
import {Box} from '@material-ui/core'
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'
import TextContainer from '../TextContainer/TextContainer';

import './InfoBar.css';

const InfoBar = ({room, users}) =>{ 
  
        return (
 <Box>
<div className="infoBar">
<div className="leftInnerContainer">
<img className="onlineIcon" src={onlineIcon} alt="online"></img>
<h3>{room}</h3>
</div>
<div>
<TextContainer  users={users}/>
</div>
<div className="rightInnerContainer">
<a href="/"><img src={closeIcon} alt="close"></img></a>
</div>
</div>
</Box>

)
}
export default InfoBar;
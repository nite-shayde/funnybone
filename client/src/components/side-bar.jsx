import React, { useState } from 'react';

function SideBar(props) {

    // const [message, setMessage] = useState('');

    return (
  
        <div className="container">
          <div className="btn-group" role="group">
            <button id="gif" type="button" className="btn btn-secondary">GIF/Meme</button>
            <button id="video" type="button" className="btn btn-secondary">Video</button>
          </div>
        </div>

    );
}

export default SideBar;
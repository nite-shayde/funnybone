import React, { useState } from 'react';

function SideBar(props) {

    // const [message, setMessage] = useState('');

    return (
  
        <div className="container">
         
             {/* TAB HEADERS */}
          {/* <div className="card-header"> */}
             <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#funny">Funny Stuff</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#inbox">Inbox</a>
              </li>
            </ul>
          {/* </div> */}
          
          
            {/* TAB CONTENTS */}
          {/* <div className="card-body"> */}
            <div id="myTabContent" class="tab-content">
              <div class="tab-pane fade show active" id="funny">
                <p>all the memes...</p>
              </div>
              <div class="tab-pane fade show" id="inbox">
                <p>messages...</p>
              </div>
            </div>
          
          {/* </div> */}
        </div>

    );
}

export default SideBar;
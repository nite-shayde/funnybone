import React, { useState } from 'react';

function SideBar(props) {

    // const [message, setMessage] = useState('');

    return (
  
        <div className="container">
         
             {/* TAB HEADERS */}
          {/* <div className="card-header"> */}
             <ul class="nav nav-tabs flex-row flex-nowrap">
            <div class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#funny">Funny Stuff</a>
              </div>
              <div class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#inbox">Inbox</a>
              </div>
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
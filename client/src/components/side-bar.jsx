import React, { useState } from 'react';

function SideBar(props) {

    // const [message, setMessage] = useState('');

    return (
  
        <div className="container">
         
             {/* TAB HEADERS */}
          {/* <div className="card-header"> */}
             <ul className="nav nav-tabs flex-row flex-nowrap">
            <div className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#funny">Funny Stuff</a>
              </div>
              <div className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#inbox">Inbox</a>
              </div>
            </ul>
          {/* </div> */}
          
          
            {/* TAB CONTENTS */}
          {/* <div classNameName="card-body"> */}
            <div id="myTabContent" className="tab-content">
              <div className="tab-pane fade show active" id="funny">
                <p>all the memes...</p>
              </div>
              <div className="tab-pane fade show" id="inbox">
                <p>messages...</p>
              </div>
            </div>
          
          {/* </div> */}
        </div>

    );
}

export default SideBar;
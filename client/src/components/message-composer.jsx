import React, { useState } from 'react';
import dummyMessageData from '../dummy-message-data';

function MessageComposer(props) {
    
    const placeholder = 'you\'re not funny...\r\nbut you should still try';
    const messages = dummyMessageData;
    const { user, mainViewUser } = props;

    return (
        // <div class="row justify-content-center">
        <div className="card text-white bg-primary mb-3">
          <div className="card-body"> 
            userID: {user.id} | mainViewUserID: {mainViewUser.id}
            <div id="conversation" className="p-3 mb-2 overflow-auto">
              {messages.map( message => <Message key={message.content} message={message} parentProps={props}/>)}
            </div>

            <form>
                <label>
                    <textarea className="form-control form-control-lg" type="text" placeholder={placeholder} onChange={(e) => setMessage(e.target.value)} />
                </label>            
                <button id="text" type="button" className="btn btn-secondary">send</button>       
            </form>
          </div>
        </div>
    );
}

function Message(props) {
  const { message, parentProps } =  props;
  const { user, mainViewUser } = parentProps;
  

  let messageClass = 'mb-2 d-flex flex-row';
  let contentClass = 'px-3 ';
  let tinyThumb = mainViewUser.profilePicURL;
  
  if (message.fromId === user.id && message.toId === mainViewUser.id) {
    messageClass += '-reverse';
    contentClass += 'text-warning';
    tinyThumb = user.profilePicURL;

  } else if (message.fromId !== mainViewUser.id || message.toId !== user.id){
    return (<span />);
  }


  return (
      <div className={messageClass}>
        <div>
          <img className="img-xxs" src={tinyThumb} />
        </div>
        <div className={contentClass}>
          {message.content}
        </div>
      </div>
  );
}



// function ConversationViewer(props){

//   const messages = dummyMessageData;

//   return (
//     <div>
//       {messages.map( message => <Message key={message.content} message={message} />)}
//    </div>
//   )
// }



export default MessageComposer;




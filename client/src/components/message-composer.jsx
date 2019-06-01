import React, { useState, useEffect } from 'react';
import dummyMessageData from '../dummy-message-data';
import axios from 'axios';

function MessageComposer(props) {
    
    const { user, mainViewUser, selectedContent } = props;
    const [ conversation, setConversation ] = useState([]);
    const [ inputText, setInputText ] = useState(null);
    const placeholder = 'you\'re not funny...\r\nbut you should still try';
    const startConversation = !conversation.length ? 'say something stupid...' : null;

    useEffect(()=>{
      fetchConvo();
    }, [conversation.length])

    function fetchConvo() {
      axios.get(`api/message/${user.id},${mainViewUser.id}`, ).then( response => {
        setConversation(response.data);
      }).catch( err => {
        console.error(err);
      });
    }

    function sendMessage(){
      if (inputText) {
        const message = {
          contentType: 'text',
          content: inputText,
          fromId: user.id,
          toId: mainViewUser.id
        }
        axios.post('/api/message', message).then( response => {
          fetchConvo();
        }).catch(err => {
          console.error(err);
        })
      }
      if (selectedContent.src) {
        const message = {
          contentType: 'gif',
          content: selectedContent.src,
          fromId: user.id,
          toId: mainViewUser.id
        }
        axios.post('/api/message', message).then( response => {
          fetchConvo();
        }).catch(err => {
          console.error(err);
        })
      }

    }

    return (
        <div className="card text-white bg-primary mb-3">
          <div className="card-body"> 
    
            <div id="conversation" className="p-3 mb-2 overflow-auto">
              { startConversation }
              {conversation.map( message => <Message key={message.content} message={message} parentProps={props}/>)}
            </div>
            <div className="row">
              <form className="col-md-8">
                  <textarea className="form-control form-control-lg" type="text" placeholder={placeholder} onChange={(e) => setInputText(e.target.value)} />      
                  <button id="text" type="button" className="btn btn-secondary flex-shrink-1" onClick={ sendMessage }>send</button>       
              </form>
              <div className="col-md-3 p-0 overflow-hidden">
                {!selectedContent.src ? <h4>add a GIF or vid</h4> : null}
                {
                  selectedContent.vidId ?  'youtube' 
                  : <img src={selectedContent.src} className="img-sm"/>
                }
                {/* <iframe className="container-fluid" src="hello" frameBorder="0" scrolling="no" allowFullScreen></iframe> */}
              </div>
            </div>
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

  // RENDER TEXT MESSAGE
  if (message.contentType === 'text') {
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

  // RENDER GIF MESSAGE
  return (
    <div className={messageClass}>
      <div>
        <img className="img-xxs" src={tinyThumb} />
      </div>
      <div className={contentClass}>
        <img className="img-sm" src={message.content} />
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




import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MessageComposer(props) {
  const {
    user, mainViewUser, selectedContent, setSelectedContent, changeView,
  } = props;
  const [conversation, setConversation] = useState([]);
  const [inputText, setInputText] = useState(null);
  const placeholder = 'you\'re not funny...\r\nbut you should still try';
  const lastMessageRef = React.createRef();

  useEffect(() => {
    fetchConvo();
    lastMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [conversation.length]);

  function fetchConvo() {
    axios.get(`api/message/${user.id},${mainViewUser.id}`).then((response) => {
      setConversation(response.data);
    }).catch(() => {
      // console.error(err);
    });
  }

  function sendMessage(e) {
    if (inputText) {
      const message = {
        contentType: 'text',
        content: inputText,
        fromId: user.id,
        toId: mainViewUser.id,
      };
      axios.post('/api/message', message).then(() => {
        fetchConvo();
      }).catch(() => {
        // console.error(err);
      });
    }
    if (selectedContent.src) {
      const message = {
        contentType: selectedContent.vidId ? 'video' : 'gif',
        content: selectedContent.vidId ? `http://www.youtube.com/embed/${selectedContent.vidId}` : selectedContent.src,
        fromId: user.id,
        toId: mainViewUser.id,
      };
      axios.post('/api/message', message).then(() => {
        fetchConvo();
      }).catch(() => {
        // console.error(err);
      });
    }
    setInputText('');
    setSelectedContent({});
  }

  function handleClick(e) {
    changeView(e.target.dataset.target, mainViewUser);
  }

  return (
    <div className="card text-white bg-primary mb-3">
      <div className="card-body">

        <div className="d-flex flex-row align-items-center mb-2">
          <img className="img-xs rounded mr-3" data-target="profile" onClick={handleClick} src={mainViewUser.profilePicURL} />
          <div data-target="profile" onClick={handleClick}>
            <h4>
              {mainViewUser.name}
            </h4>
          </div>
        </div>

        <div id="conversation" className="p-3 mb-2 overflow-auto">
          {/* { startConversation } */}
          {conversation.map(message => <Message key={message.content} message={message} parentProps={props} />)}
          <div ref={lastMessageRef} />
        </div>
        <div className="row">
          <form className="col-md-8">
            <textarea className="form-control mb-2" type="text" placeholder={placeholder} value={inputText} onChange={e => setInputText(e.target.value)} />
            <button id="text" type="button" className="btn btn-warning flex-shrink-1" onClick={sendMessage}>send</button>
          </form>
          <div className="col-md-3 p-0 overflow-hidden">
            {!selectedContent.src ? <h4>add a GIF or vid</h4> : null}
            {<img src={selectedContent.src} className="img-sm" />}

          </div>
        </div>
      </div>
    </div>
  );
}

function Message(props) {
  const { message, parentProps } = props;
  const { user, mainViewUser } = parentProps;


  let messageClass = 'mb-2 d-flex flex-row';
  let contentClass = 'px-3 ';
  let tinyThumb = mainViewUser.profilePicURL;

  if (message.fromId === user.id && message.toId === mainViewUser.id) {
    messageClass += '-reverse';
    contentClass += 'text-warning';
    tinyThumb = user.profilePicURL;
  } else if (message.fromId !== mainViewUser.id || message.toId !== user.id) {
    return (<span />);
  }

  // RENDER TEXT MESSAGE
  if (message.contentType === 'text') {
    return (
      <div className={messageClass}>
        <div>
          <img className="img-xxs rounded" src={tinyThumb} />
        </div>
        <div className={contentClass}>
          {message.content}
        </div>
      </div>
    );
  }

  // RENDER GIF MESSAGE
  if (message.contentType === 'gif') {
    return (
      <div className={messageClass}>
        <div>
          <img className="img-xxs" src={tinyThumb} alt="" />
        </div>
        <div className={contentClass}>
          <img className="img-md rounded" src={message.content} alt="" />
        </div>
      </div>

    );
  }

  // YOUTUBE VID
  return (
    <div className={messageClass}>
      <div>
        <img className="img-xxs" src={tinyThumb} alt="" />
      </div>
      <div className={contentClass}>
        <iframe title="youtube" src={message.content} width="auto" height="auto" frameBorder="0" allowFullScreen />
      </div>
    </div>

  );
}


export default MessageComposer;

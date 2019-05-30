import React, { useState } from 'react';

function MessageComposer(props) {

    const [message, setMessage] = useState('');
    
    const placeholder = 'you\'re not funny...\r\nbut you should still try';

    return (
        // <div class="row justify-content-center">
        <div className="card text-white bg-primary mb-3">
          <div className="card-body">
            <form>
                <label>
                    
                    <textarea className="form-control form-control-lg" type="text" placeholder={placeholder} onChange={(e) => setMessage(e.target.value)} />
                </label>
                <div className="btn-group" role="group">
                    <button id="text" type="button" className="btn btn-secondary">Text</button>
                    <button id="gif" type="button" className="btn btn-secondary">GIF/Meme</button>
                    <button id="video" type="button" className="btn btn-secondary">Video</button>
                </div>
            </form>
          </div>
        </div>
    );
}

export default MessageComposer;
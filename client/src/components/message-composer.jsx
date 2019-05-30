import React, { useState } from 'react';

function MessageComposer(props) {

    const [message, setMessage] = useState('');
    

    return (
        // <div class="row justify-content-center">
        <div className="card text-white bg-primary mb-3">
          <div className="card-body">
            <form>
                <label>
                    
                    <input className="form-control form-control-lg" type="text" placeholder="you're not funny... but you should try" onChange={(e) => setMessage(e.target.value)} />
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
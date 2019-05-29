import React, { useState } from 'react';

function MessageComposer(props) {

    const [message, setMessage] = useState('');

    return (
        // <div class="row justify-content-center">
        <div className="card text-white bg-primary mb-3">
          <div className="card-body">
            <form>
                <label>
                    Enter Message:
                    <input className="form-control form-control-lg" type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
                </label>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-secondary">GIFs</button>
                    <button type="button" className="btn btn-secondary">Jokes</button>
                    <button type="button" className="btn btn-secondary">Images</button>
                </div>
            </form>
          </div>
        </div>
    );
}

export default MessageComposer;
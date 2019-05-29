import React, { useState } from 'react';

function MessageComposer(props) {

    const [message, setMessage] = useState('');

    return (
        <div class="row justify-content-center">
            <form>
                <label>
                    Enter Message:
                    <input class="form-control form-control-lg" type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
                </label>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-secondary">GIFs</button>
                    <button type="button" class="btn btn-secondary">Jokes</button>
                    <button type="button" class="btn btn-secondary">Images</button>
                </div>
            </form>
        </div>
    );
}

export default MessageComposer;
import React, { useState } from 'react';
import axios from 'axios';

function SearchSideBar(props) {
    const [ query, setQuery] = useState(null);
    const [ list, setList ] = useState([]);
    const [ contentType, setContentType ] = useState('gif');

    function doSearch() {
      if (query) {
        axios.post('api/content', { query, contentType }).then (response => {
          setList(response.data)
        }).catch(err => {
          console.error(err)
        })
      }
    }

    function clickSearch() {
       doSearch();
    }

    function selectType(e) {
      setList([]);
      setContentType(e.target.name);
      doSearch();
    }

    return (
  
        <div className="d-flex flex-column justify-content-center">
          <div className="btn-group mb-2" role="group">
            <button name="gif" type="button" className="btn btn-primary" onClick={selectType}>GIF/Meme</button>
            <button name="video" type="button" className="btn btn-primary" onClick={selectType}>Video</button>
          </div>
          <div className="d-flex flex-row">
            <input className="flex-grow-1" type="text" onChange={(e) => setQuery(e.target.value)}/>
            <button onClick={clickSearch} className="btn"><img src="./img/search-icon.png" className="img-xxs ml-2" /></button>
          </div>
          <div className="overflow-auto" id="search-content">
            <ContentList list={list} contentType={contentType}/>
          </div>
        </div>

    );
}


function ContentList(props) {

  const { list, contentType } = props;

  if (contentType === 'video') {
    return (
      <div>
        Videos:
        {list.map((video) => <YoutubeItem video={video}/>)}
      </div>
    )
  } else if (contentType === 'gif') {
    return (
      <div>
        GIFFY:
        {list.map((gif) =>  <GiffyItem gif={gif}/>)}
      </div>
    )
  }
}

function GiffyItem(props) {
  const { gif  } = props;
  console.log(gif)
  const gifSource = gif.images.downsized_medium.url.replace(/media[0-9]/, 'i');
  return (
    <div><img className="img-md mb-2" src={gifSource} /></div>
  );
}

function YoutubeItem(props) {
  const { video } = props;
  if (video.id) {
    const { videoId } = video.id;
    return (
      <div className="mb-2">
        <iframe src={`http://www.youtube.com/embed/${videoId}`} width="auto" height="auto" frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
  return <span />
}


export default SearchSideBar;
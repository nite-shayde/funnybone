import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { cpus } from 'os';

function SearchSideBar(props) {
    const { changeSelectedContent } = props;
    const [ query, setQuery] = useState(null);
    const [ listGIF, setListGIF ] = useState([]);
    const [ listVID, setListVID ] = useState([]);
    const [ contentType, setContentType ] = useState('gif');

    // useEffect(()=>{
    //   if(query) doSearch();
    // }, contentType)

    function doSearch() {
      if (query) {
        const contentTypeOnSearch = contentType;
        axios.post('api/content', { query, contentType }).then (response => {
          setContentType(contentTypeOnSearch); //this ensures that content for the data coming is reset to what it was in case use changes before response
          if (contentType === 'gif') setListGIF(response.data);
          else if (contentType === 'video') setListVID(response.data);
        }).catch(err => {
          console.error(err)
        })
      }
    }

    function clickSearch(e) {
       e.preventDefault();
       doSearch();
    }

    function selectType(e) {
      // setListGIF([]);
      setContentType(e.target.name);
    }

    function handleChange(e){
      console.dir(e)
      setQuery(e.target.value)
    }

    return (
  
        <div className="d-flex flex-column justify-content-center">
          <form className="d-flex flex-row mb-2">
            <input className="flex-grow-1" type="text" onChange={handleChange}/>
            <button type="submit" onClick={clickSearch} className="btn btn-sm"><img src="./img/search-icon.png" className="img-xxs ml-2" /></button>
          </form>
          <div className="btn-group mb-2 d-flex flex-row" role="group">
            <button name="gif" type="button" className="btn btn-primary btn-sm" onClick={selectType}>Giphy</button>
            <button name="video" type="button" className="btn btn-primary btn-sm" onClick={selectType}>Video</button>
          </div>
          <div className="overflow-auto" id="search-content">
            <ContentList listGIF={listGIF} listVID={listVID} contentType={contentType} changeSelectedContent={changeSelectedContent}/>
          </div>
        </div>

    );
}


function ContentList(props) {

  const { listGIF, listVID, contentType, changeSelectedContent } = props;
  let srcList = [];
  let componentList = []

  if (contentType === 'video') {
    // srcList = listVID.map(vid => { return { vidId: vid.id.videoId, src: vid.snippet.thumbnails.medium.url } }  ) 
    componentList = listVID.map( vid => <YoutubeItem vid={vid} changeSelectedContent={changeSelectedContent} key={vid.id.videoId}/>)
  } else if (contentType === 'gif') {
    componentList = listGIF.map( gif => <GiphyItem gif={gif} changeSelectedContent={changeSelectedContent} key={gif.id}/>)
    // srcList = listGIF.map(gif => { return { src: gif.images.downsized_medium.url.replace(/media[0-9]/, 'i') } }  )  
  }

  return (
    <div> 
      {componentList}
      {/* {srcList.map(item => <ContentListItem vidId={item.vidId} src={item.src}  changeSelectedContent={changeSelectedContent} key={item.vidId} />  ) }  */}
     </div> 
    )
}


 //`http://www.youtube.com/embed/${vid.id.videoId}`

function ContentListItem(props) {
  const { src, vidId, changeSelectedContent } = props;

  function handleClick() {
    changeSelectedContent(src, vidId)
    console.log(src, vidId)
  }

  return ( 
    <div onClick={handleClick}>
      <img className="img-md" src={src} />
      {/* <iframe  className="container-fluid" src={src} frameBorder="0" scrolling="no" allowFullScreen></iframe> */}
    </div>
  )
}


function GiphyItem(props) {
  const { gif, changeSelectedContent } = props;
  const gifSource = gif.images.downsized_medium.url.replace(/media[0-9]/, 'i');
  function handleClick() {
    changeSelectedContent(gifSource)
  }
  return (
    <div onClick={handleClick}><img className="img-md mb-2 search-content" src={gifSource} /></div>
  );
}

function YoutubeItem(props) {
  const { vid, changeSelectedContent } = props;
  const vidThumbSource = vid.snippet.thumbnails.medium.url
  function handleClick() {
    changeSelectedContent(vidThumbSource, vid.id.videoId)
  }
  if (vid.id) {
    const { videoId } = vid.id;
    return (
      <div className="mb-2">
        <iframe className="search-content" src={`http://www.youtube.com/embed/${videoId}`} width="auto" height="auto" frameborder="0" allowfullscreen></iframe>
        <span class="badge badge-info" onClick={handleClick}>select</span>
      </div>

    );
  }
  return <span />
}


export default SearchSideBar;
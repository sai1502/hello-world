import React from 'react';

const VedioListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    //const video = props.video;
    return(
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
        <div className="media-left">
        <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body"></div>
        <div className="media-heading">{video.snippet.title}</div>
        </div>
        </li>
    );
};
export default VedioListItem;
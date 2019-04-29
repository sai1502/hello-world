import React from 'react';
import VedioListItem from './VedioListItem';

const VedioList = (props) => {
   const videoItems = props.videos.map((video) => {
        return(
        <VedioListItem
        onVideoSelect={props.onVideoSelect}
         key={video.etag} 
         video={video} />

        );
    });
   return(
    <ul className="col-md-6 list-group">
    {videoItems}
    </ul>
   );
}
export default VedioList;
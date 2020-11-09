import React, {useState, useEffect} from 'react'
import {Video} from './Video';
import * as videoService from './VideoService'
import VideoItem from './VideoItems'




const VideoList = () => {

    const [videos, setVideos] = useState<Video[]>([])
 
    const loadVideos = async () => {

    const res = await videoService.getVideos()

      const formatedVideos =  res.data.map(video => {
            return {
                ...video,
                createdAT: video.createdAT ? new Date(video.createdAT): new Date(), 
                updatedAt: video.updatedAt ? new Date(video.updatedAt): new Date(),
            }
        })
            .sort((a, b) => b.createdAT.getTime() - a.updatedAt.getTime());

    setVideos(formatedVideos);

    }

    useEffect(() => {
        loadVideos();
    }, []) 

    return (
        <div className="row">
            {videos.map((video) => {
               return <VideoItem video={video} key={video._id}/>
               
            })}
        </div>
    )


}

export default VideoList
import React from 'react'
import { Video } from './Video'
import './VideoItems.css'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router-dom'


interface Props {
    video: Video
}


const VideoItem = ({video}: Props) => {


    // to update push history to DOM 
    const history = useHistory();
    
        return(
        
            <div className="col-md-4">
                <div className="card text-white bg-info mb-3">
                    <div className="card card-body video-card" style={{cursor: 'pointer'}}
                        onClick={() => history.push(`/update/${video._id}`)}
                    
                    >
                        <div className="d-flex justify-content-between">
                                    <h1>
                                {video.title}
                                          </h1>
                            <span className="text-danger">X</span>
                        </div>
            
                 <p>{video.description}</p>
                 <div className="embed-responsive embed-responsive-16by9">
                 <ReactPlayer url={video.url} />
                 </div>
                
                    </div>
                </div>
                
                
            </div>
        )

   

    }
    




export default VideoItem    
import React, { ChangeEvent, FormEvent, useEffect, useState, } from 'react'
import {Video} from './Video'
import * as videoService from './VideoService'
import {useHistory, useParams} from 'react-router-dom'
import {toast} from 'react-toastify'


type InputChange =  ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
    id: string
}


const VideoForm = () => {

    const history = useHistory()
    const params = useParams<Params>()

    const [video, setVideo] = useState<Video>({
        title: '', 
        description: '', 
        url: ''});

        const handleInputChange = (e: InputChange) => {
            setVideo({...video, [e.target.name]: e.target.value})
        }
            const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
       await videoService.createVideos(video);
                toast.success('New Memories Shared!!!')
                history.push('/VideoList')
            } 

                //catch the params id log

            const getVideo = async (id: string) => {
                const res = await videoService.getVideo(id);
                
                //test
                console.log(res);

            }            

             useEffect(() => {
                if(params.id) getVideo(params.id);
            }, [])

    return (
      <div className="row">
          <div className="col-md-4 offset-md-4">
                  <div className="card text-white bg-info mb-3">
                      <div className="card-body">
                          <h3>New Video</h3>
                          <form onSubmit={handleSubmit}>
                             <div className="form-group">
                             <input type="text" name="title" placeholder="Write the title for this Video" className="form-control"
                             autoFocus
                             onChange={handleInputChange}
                             />
                             </div>
                             <div className="form-group">
                             <input type="text" name="url" placeholder="www.youtube.com" className="form-control"
                             autoFocus
                             onChange={handleInputChange}
                             />
                             </div>
                             <div className="form-group">
                                 <textarea name="description" rows={3} className="form-control"
                                 placeholder="Write the Description"
                                 autoFocus
                                onChange={handleInputChange}
                                 ></textarea>
                             </div>
                                    {
                                        params.id ?    
                                       ( <button className="btn btn-primary btn-xl form-control" >
                                        Update Video!
                                        </button> )
                                        :
                                       ( <button className="btn btn-primary btn-xl form-control" >
                                        Share Video!
                                        </button>  )                
                                    }

                           

                          </form>
                      </div>
                  </div>
              
          </div>
      </div>
    )
}

export default VideoForm
import {RequestHandler} from 'express'
import Video from './Video'


//Create
export const createVideos: RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({url: req.body.url})
    // if file already saved and not unique
    if(videoFound)
        return res.status(301).json({message: 'The Video already exists in file'})

    const video = new Video(req.body)
    const savedVideo = await video.save()
    res.json(savedVideo)
} 
//Get
export const getVideos: RequestHandler = async (req, res) => {
        try {
            const videos = await Video.find()
            return res.json(videos);
        } catch (error) {
            res.json(error)
        }
} 

//Get update
export const getVideo: RequestHandler = (req, res) => {
    console.log(req.params)
    return res.json(req.params.id)
} 

export const deleteVideos: RequestHandler = (req, res) => {
    res.json('Deleting video')
} 

export const updateVideos: RequestHandler = (req, res) => {
    res.json('Updating video')
} 


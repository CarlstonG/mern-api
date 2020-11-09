import dotenv from 'dotenv'
dotenv.config();

export default {
    //datas hiddn in env file
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'videosdb',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONG0_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    PORT: process.env.PORT || 3000

}
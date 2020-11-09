import mongoose, { ConnectionOptions } from 'mongoose'
import config from './config'

(async () => {
 try {
    const mongooseOptions: ConnectionOptions = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
       /*user: config.MONGO_USER,
        pass: config.MONG0_PASSWORD,
         */
        }
 
 
    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions);
    console.log('Connected to:', db.connection.name)
        }       catch (error) {
            console.error(error)
    }
}
)()
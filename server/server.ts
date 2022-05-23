import express, { Request, Response, json } from 'express'
import { connect } from 'mongoose'
import recipeRouter from './routes/recipeRouter'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(json())
app.use(cors())


app.use(recipeRouter)

const port = process.env.PORT || 4000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello there!')
})
if (process.env.MONGO_DB_CONNECTION_STRING){
    connect(process.env.MONGO_DB_CONNECTION_STRING).then(() => {
        app.listen(port, () => {
            console.log(`App listening on port ${port}`)
        })
})} else {
    console.log('Configuration process.env.MONGO_DB_CONNECTION_STRING not set')
}

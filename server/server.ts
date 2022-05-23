import express, { Request, Response, json } from 'express'
import { connect } from 'mongoose'
import recipeRouter from './routes/recipeRouter'
import cors from 'cors'

const app = express()
app.use(json())
app.use(cors({
    origin: 'http://localhost:3000'
}))


app.use(recipeRouter)

const port = process.env.PORT || 4000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello there!')
})

connect('mongodb+srv://KingaSzayer-Iths:bpja5dUaeZal7qYG@cluster0.s0m39.mongodb.net/recipe?retryWrites=true&w=majority').then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})

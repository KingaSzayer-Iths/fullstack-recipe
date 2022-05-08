import express, { Request, Response, json } from 'express'

const app = express()
app.use(json())
const port = 4000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello there!')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
import express from 'express';

const app = express()
const port = 80

app.use(express.static('dist'))

app.listen(port, () => console.log('server started on port 80'))
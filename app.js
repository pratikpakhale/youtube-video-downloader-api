const express = require('express')
const cors = require('cors')
const ytdl = require('ytdl-core')
const app = express()
app.use(cors())

app.get('/download', async (req, res) => {
  var URL = req.query.URL

  const info = await ytdl.getInfo(URL)

  res.header(
    'Content-Disposition',
    'attachment; filename="' + info.videoDetails.title + '.mp4"'
  )
  ytdl(URL, {
    format: 'mp4',
  }).pipe(res)
})

app.listen(4000, () => {
  console.log('Server Works !!! At port 4000')
})

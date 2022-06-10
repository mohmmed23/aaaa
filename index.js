const express = require('express')
app = express()

app.get('/', (req, res) => {
  res.send('hiiiiiiiii')
})
//==================
app.listen(5000)

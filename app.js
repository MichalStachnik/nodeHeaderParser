var express = require('express')
var useragent = require('express-useragent')
var app = express()

app.use(useragent.express())

app.get('/', (req, res, next) => {

  var language = req.acceptsLanguages()[0]

  var os = req.useragent
  //req.headers['user-agent']
  //req.get('User-Agent')
  var platform = os.platform
  var OS = os.os
  var browser = os.browser
  var ip = req.ip
  
  res.json({ip, language, OS, platform, browser})
})

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on 3000')
})

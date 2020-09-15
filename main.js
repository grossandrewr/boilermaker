'use strict'

const db = require('./server/database');
const app = require('./server')

const port = process.env.PORT || 3000;

db.sync()
  .then(() => {
    console.log('db synced')
    app.listen(port, function(){ console.log(`Server LiStenIng on pOrt ${port}`)
  })
})

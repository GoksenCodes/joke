const express = require('express')

const app = express()

const page = `
<html>
<head>
  <title>GoksenGorgulu</title>
</head>
<body>
  <h1>How does NASA organize their company parties?</h1>
  <p>They planet.<p>
</body>
</html>`

app.get('/', 
(request,response) => {
  response.send(page)
})

const port = 3000

function onListen () {
  console.log(`Listening on :${port}`)
}

app.listen(port,onListen)
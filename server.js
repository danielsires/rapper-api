const express = require('express')
const app = express()
const port = 8000

const rappers = {
  '21 savage': {
    age: 29,
    birthName: 'Sheyaa Bin Abraham-Joseph',
    birthLocation: 'London, England',
  },
  drake: {
    age: 35,
    birthName: 'Aubrey Graham',
    birthLocation: 'Toronto, Canada',
  },
  'j cole': {
    age: 35,
    birthName: 'Jermaine Cole',
    birthLocation: 'Fayettville, North Carolina',
  },
  unknown: {
    age: 0,
    birthName: 'unknown',
    birthLocation: 'unknown',
  },
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
  res.json(rappers)
})

app.get('/api/:name', (req, res) => {
  const rapperName = req.params.name.toLowerCase()
  rappers[rapperName]
    ? res.json(rappers[rapperName])
    : res.json(rappers['unknown'])
})

app.listen(process.env.PORT || port, () =>
  console.log(`Server is running on port ${port}! You'd better go catch it!`)
)

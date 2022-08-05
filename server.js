const express = require('express')
const session = require('express-session')
const Keycloak = require('keycloak-connect')
const memoryStore = new session.MemoryStore()
const keycloak = new Keycloak({ store: memoryStore })

const app = express()
app.use(keycloak.middleware())

app.get('/', (req, res) => {
  const token = req.kauth.grant.access_token.content
  console.log(token)
  
  res.send('Hello World')
})

app.listen(3001, () => {
  console.log('App is running on 3001')
})
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, '..', 'build')))
app.use(express.static(path.resolve(__dirname, '.', 'build')))

const port = process.env.PORT || 1111
const server = http.createServer(app)

const socketIO = require('socket.io')
const io = socketIO(server)

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '.', 'build', 'index.html'))
})

server.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

app.locals.title = 'Bird\'s Eye Community'

// app.get('/', (req, res) => {
//   res.redirect('/messages')
// })

// io.on('connection', (socket) => {
//   console.log('A user has connected.', io.engine.clientsCount)
//   io.sockets.emit('usersConnected', io.engine.clientsCount)
//
//   socket.emit('statusMessage', 'You are connected.')
//
//   socket.on('', (optionID, profileImg) => {
//     updateVoteResults(profileImg)
//     app.locals.voteResults.push({
//       optionID,
//       profileImg
//     })
//     io.sockets.emit('voteCount', app.locals.voteResults)
//   })
//
//   socket.on('disconnect', () => {
//     console.log('A user has disconnected.', io.engine.clientsCount)
//     delete votes[socket.id]
//     io.sockets.emit('usersConnected', io.engine.clientsCount)
//   })
// })

'use strict'

const url = require('url')
const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({port: 8090})

let wordArr = ['Monkey', 'Dog', 'Bear', 'Flower', 'Girl']

class GameRoom {
  constructor (id) {
    this.id = id
    console.log('room', id, 'created')
  }
}

let rooms = {}

wss.on('connection', function (ws, req) {
  console.log('connected.', ws.url, ws.address, req.url)

  const location = url.parse(req.url, true)
  // console.log('location', location)

  let room
  let roomId = (location && location.query) ? location.query.room : ''
  if (roomId) {
    room = rooms[roomId]
    rooms[roomId] = room || new GameRoom(roomId)
  }

  let keyWord = ((arr) => {
    let num = Math.floor(Math.random() * arr.length)
    return arr[num]
  })(wordArr)

  ws.on('message', function (message) {
    console.log('received: %s', message)
    if (message === keyWord) {
      console.log('correct')
      wss.clients.forEach((client) => {
        client.send('答对了！！')
      })
    } else {
      console.log('wrong')
      wss.clients.forEach((client) => {
        client.send(message)
      })
    }
  })

  wss.clients.forEach((client) => {
    client.send('keyword:' + keyWord)
  })
})

'use strict'

const url = require('url')
const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({port: 8090})

let wordArr = ['Monkey', 'Dog', 'Bear', 'Flower', 'Girl']

class GameRoom {
  get seats () { return this._seats || (this._seats = []) }
  constructor (id) {
    this.id = id
    console.log('room', id, 'created')
  }
}

let rooms = {}

wss.on('connection', function (ws, req) {
  console.log('connected.', ws.url, ws.address, req.url)

  const location = url.parse(req.url, true)

  let room
  let roomId = (location && location.query) ? location.query.room : ''
  if (roomId) {
    room = rooms[roomId]
    rooms[roomId] = room || (room = new GameRoom(roomId))
  } else {
    console.log('no room break');
    return false
  }

  let keyWord = ((arr) => {
    let num = Math.floor(Math.random() * arr.length)
    return arr[num]
  })(wordArr)

  ws.on('message', function (message) {

    if (message.indexOf('event:') === 0) {
      let i = message.indexOf('event:login:')
      if (i === 0) {
        let player = JSON.parse(message.substr(i + 12))
        room.seats[player['player-name']] = player
        wss.clients.forEach((e) => {
          e.send(message)
        })
        console.log('room', room)
      }
    }

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
